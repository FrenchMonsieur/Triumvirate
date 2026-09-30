global.reverseEagleDanceEffect = (level, pos, context) => {
    if (level.isClientSide()) return;

    const AABB = Java.loadClass('net.minecraft.world.phys.AABB');
    const MobClass = Java.loadClass('net.minecraft.world.entity.Mob');
    const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

    const RANGE = 8;
    const aabb = new AABB(
        pos.x - RANGE, pos.y - RANGE, pos.z - RANGE,
        pos.x + RANGE + 1, pos.y + RANGE + 1, pos.z + RANGE + 1
    );

    const eagles = level.getEntitiesOfClass(
        MobClass, aabb,
        mob => mob.type.toString() === 'totemic:bald_eagle' && mob.isAlive()
    );

    const parrotType = BuiltInRegistries.ENTITY_TYPE.get(new ResourceLocation('minecraft', 'parrot'));

    eagles.stream().limit(8).forEach(eagle => {
        const ex = eagle.x;
        const ey = eagle.y;
        const ez = eagle.z;
        const leashHolder = eagle.isLeashed() ? eagle.leashHolder : null;
        eagle.discard();

        const parrot = parrotType.create(level);
        if (parrot) {
            parrot.setPos(ex, ey, ez);
            parrot.setVariant(Math.floor(Math.random() * 5));
            if (leashHolder) parrot.setLeashedTo(leashHolder, true);
            level.addFreshEntity(parrot);
        }
    });
}

global.reverseBuffaloDanceEffect = (level, pos, context) => {
    if (level.isClientSide()) return;

    const AABB = Java.loadClass('net.minecraft.world.phys.AABB');
    const MobClass = Java.loadClass('net.minecraft.world.entity.Mob');
    const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

    const RANGE = 8;
    const aabb = new AABB(
        pos.x - RANGE, pos.y - RANGE, pos.z - RANGE,
        pos.x + RANGE + 1, pos.y + RANGE + 1, pos.z + RANGE + 1
    );

    const buffalos = level.getEntitiesOfClass(
        MobClass, aabb,
        mob => mob.type.toString() === 'totemic:buffalo' && mob.isAlive()
    );

    const cowType = BuiltInRegistries.ENTITY_TYPE.get(new ResourceLocation('minecraft', 'cow'));

    buffalos.stream().limit(8).forEach(buffalo => {
        const ex = buffalo.x;
        const ey = buffalo.y;
        const ez = buffalo.z;
        const leashHolder = buffalo.isLeashed() ? buffalo.leashHolder : null;
        buffalo.discard();

        const cow = cowType.create(level);
        if (cow) {
            cow.setPos(ex, ey, ez);
            cow.setAge(-24000);
            if (leashHolder) cow.setLeashedTo(leashHolder, true);
            level.addFreshEntity(cow);
        }
    });
}

global.lakotaEffect = (level, pos, context) => {
    if (level.isClientSide()) return;

    const Direction = Java.loadClass('net.minecraft.core.Direction');
    const Heightmap = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap');
    const MobSpawnType = Java.loadClass('net.minecraft.world.entity.MobSpawnType');
    const LevelEvent = Java.loadClass('net.minecraft.world.level.block.LevelEvent');
    const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

    if (context.getTime() === 4 * 20 - 1) {
        level.globalLevelEvent(LevelEvent.SOUND_WITHER_BOSS_SPAWN, pos, 0);

        const directions = [Direction.NORTH, Direction.SOUTH, Direction.EAST, Direction.WEST];
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        let spawnPos = pos.relative(randomDir);
        spawnPos = level.getHeightmapPos(Heightmap.Types.MOTION_BLOCKING_NO_LEAVES, spawnPos);

        const darkShamanType = BuiltInRegistries.ENTITY_TYPE.get(new ResourceLocation('arkane_domains', 'dark_shaman'));
        if (darkShamanType) {
            darkShamanType.spawn(level, spawnPos, MobSpawnType.MOB_SUMMONED);
        } else {
            console.log('ERROR: dark_shaman entity type not found');
        }
    }
}

TotemicEvents.registerCeremonies(event => {
    event.create('kubejs:lakota')
        .musicNeeded(12000)
        .maxStartupTime(30 * 20)
        .selectors('totemic:rattle', 'totemic:eagle_bone_whistle')
        .effectDuration(4 * 20)
        .effect((level, pos, context) => global.lakotaEffect(level, pos, context))
        .displayName('Lakota')

    event.create('kubejs:reverse_eagle_dance')
        .musicNeeded(12000)
        .maxStartupTime(30 * 20)
        .selectors('totemic:rattle', 'totemic:rattle')
        .effectDuration(0)
        .effect((level, pos, context) => global.reverseEagleDanceEffect(level, pos, context))
        .displayName('Parrot Dance')

    event.create('kubejs:reverse_buffalo_dance')
        .musicNeeded(12000)
        .maxStartupTime(30 * 20)
        .selectors('totemic:wind_chime', 'totemic:wind_chime')
        .effectDuration(0)
        .effect((level, pos, context) => global.reverseBuffaloDanceEffect(level, pos, context))
        .displayName('Cow Dance')
})

TotemicEvents.registerMusicInstruments(event => {
	event.create('kubejs:fiddle')
		.baseOutput(240) 
		.musicMaximum(3000) 
        .sound('triumvirate:apache_fiddle_played')
		.displayItem('kubejs:fiddle')
		.displayName('Apache Fiddle')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:fiddle')
        .displayName('Apache Fiddle').maxStackSize(1).texture('triumvirate:item/fiddle')
		.use((level, player, hand) => {
			if (player.isShiftKeyDown()) { 
				TotemicAPI.music().playSelector(player, 'kubejs:fiddle')
			} else {
				TotemicAPI.music().playMusic(player, 'kubejs:fiddle')
			}
			player.cooldowns.addCooldown('kubejs:fiddle', 20)
			return true
		})
})

StartupEvents.registry("sound_event", event => {
    event.create("triumvirate:apache_fiddle_played")
})

global.twilightHuntEffect = (level, pos, context) => {
    if (level.isClientSide()) return;
    if (context.getTime() === 0) {
        level.runCommandSilent(`open_gateway ${Math.floor(pos.x)} ${Math.floor(pos.y) + 2} ${Math.floor(pos.z)} kubejs:twilight_goat_hunt`);
    }
}

TotemicEvents.registerCeremonies(event => {

    event.create('kubejs:twilight_hunt')
        .musicNeeded(7000)
        .maxStartupTime(30 * 20)
        .selectors('kubejs:fiddle', 'totemic:drum')
        .effectDuration(1)
        .effect((level, pos, context) => global.twilightHuntEffect(level, pos, context))
        .displayName('The Twilight Hunt')
})

global.bloodHuntEffect = (level, pos, context) => {
    if (level.isClientSide()) return;
    if (context.getTime() === 0) {
        level.runCommandSilent(`open_gateway ${Math.floor(pos.x)} ${Math.floor(pos.y) + 2} ${Math.floor(pos.z)} kubejs:bewereager_hunt`);
    }
}

TotemicEvents.registerCeremonies(event => {

    event.create('kubejs:blood_hunt')
        .musicNeeded(9000)
        .maxStartupTime(30 * 20)
        .selectors('kubejs:fiddle', 'totemic:wind_chime')
        .effectDuration(1)
        .effect((level, pos, context) => global.bloodHuntEffect(level, pos, context))
        .displayName('The Blood Hunt')
})

global.broodHuntEffect = (level, pos, context) => {
    if (level.isClientSide()) return;
    if (context.getTime() === 0) {
        level.runCommandSilent(`open_gateway ${Math.floor(pos.x)} ${Math.floor(pos.y) + 2} ${Math.floor(pos.z)} kubejs:brood_hunt`);
    }
}

TotemicEvents.registerCeremonies(event => {

    event.create('kubejs:brood_hunt')
        .musicNeeded(11000)
        .maxStartupTime(30 * 20)
        .selectors('kubejs:fiddle', 'totemic:rattle')
        .effectDuration(1)
        .effect((level, pos, context) => global.broodHuntEffect(level, pos, context))
        .displayName('The Weaver Hunt')
})

global.deerSummonEffect = (level, pos, context) => {
    if (level.isClientSide()) return;
    if (context.getTime() === 0) {
        level.runCommandSilent(`execute if entity @p[nbt={Inventory:[{id:"kubejs:deer_effigy"}]}] run give @p kubejs:awake_deer_effigy 1`);
        level.runCommandSilent(`clear @p kubejs:deer_effigy 1`);
    }
}

TotemicEvents.registerCeremonies(event => {

    event.create('kubejs:deer_summon')
        .musicNeeded(13000)
        .maxStartupTime(30 * 20)
        .selectors('kubejs:fiddle', 'totemic:eagle_bone_whistle')
        .effectDuration(1)
        .effect((level, pos, context) => global.deerSummonEffect(level, pos, context))
        .displayName('The White Stag')
})