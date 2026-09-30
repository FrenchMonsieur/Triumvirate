const AABB = Java.loadClass('net.minecraft.world.phys.AABB');
const MobClass = Java.loadClass('net.minecraft.world.entity.Mob');

TotemicEvents.ceremonyEffectTick('totemic:eagle_dance', event => {
	event.cancel();
});

TotemicEvents.ceremonyEffectTick('totemic:buffalo_dance', event => {
	event.cancel();
});

TotemicEvents.ceremonySelection('totemic:baykok_summon', event => {
    event.cancel();
});

TotemicEvents.ceremonySelection('kubejs:reverse_eagle_dance', event => {
    const RANGE = 8;
    const pos = event.pos;
    const aabb = new AABB(
        pos.x - RANGE, pos.y - RANGE, pos.z - RANGE,
        pos.x + RANGE + 1, pos.y + RANGE + 1, pos.z + RANGE + 1
    );

    const hasEagles = !event.level.getEntitiesOfClass(
        MobClass, aabb,
        mob => mob.type.toString() === 'totemic:bald_eagle' && mob.isAlive()
    ).isEmpty();

    if (!hasEagles) {
        event.initiator.sendSystemMessage(Component.literal('The Parrot Dance Ceremony requires Bald Eagles nearby'));
        event.cancel();
    }
});

TotemicEvents.ceremonySelection('kubejs:reverse_buffalo_dance', event => {
    const RANGE = 8;
    const pos = event.pos;
    const aabb = new AABB(
        pos.x - RANGE, pos.y - RANGE, pos.z - RANGE,
        pos.x + RANGE + 1, pos.y + RANGE + 1, pos.z + RANGE + 1
    );

    const hasBuffalos = !event.level.getEntitiesOfClass(
        MobClass, aabb,
        mob => mob.type.toString() === 'totemic:buffalo' && mob.isAlive()
    ).isEmpty();

    if (!hasBuffalos) {
        event.initiator.sendSystemMessage(Component.literal('The Cow Dance Ceremony requires Buffalos nearby'));
        event.cancel();
    }
});

TotemicEvents.ceremonySelection('kubejs:deer_summon', event => {
    const player = event.initiator;
    const inv = player.getInventory();
    for (let i = 0; i < 36; i++) {
        if (!inv.getItem(i).isEmpty() && inv.getItem(i).id === 'kubejs:deer_effigy') return;
    }
    player.sendSystemMessage(Component.literal('The White Stag Ceremony requires a Deer Effigy'));
    event.cancel();
});