const cooldowns = new Map();

ItemEvents.rightClicked('kubejs:cat_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph minecraft:cat`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:bear_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph primal:bear`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:cave_spider_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph minecraft:cave_spider`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:bee_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph minecraft:bee`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:lionfish_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph cataclysm:lionfish`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:fire_beetle_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph twilightforest:fire_beetle`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:gnasher_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph goety:gnasher`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:ravager_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph minecraft:ravager`);
    player.addTag('Morphed');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked('kubejs:queen_bee_aspect', event => {
  const { player, item } = event;

  if (player.tags.contains('Morphed')) {
    player.server.runCommandSilent(`execute as @p[tag=Morphed] at @p[tag=Morphed] run identity clear`);
    player.removeTag('Morphed');
    player.removeTag('MorphedBee');
  } else {
    player.server.runCommandSilent(`execute as @p at @p run identity morph queen_bee:queen_bee`);
    player.addTag('Morphed');
    player.addTag('MorphedBee');
  }

  player.addItemCooldown(Item.of('kubejs:cat_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bear_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:cave_spider_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:fire_beetle_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:lionfish_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:queen_bee_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:gnasher_aspect').item, 100);
  player.addItemCooldown(Item.of('kubejs:ravager_aspect').item, 100);
});

ItemEvents.rightClicked(event => {

    let player = event.player

    let level = event.level

    let item = event.item

 

    if (item.id !== 'kubejs:awake_deer_effigy') return

 

    let ok = Gateway.createGateway(

        level,

        'kubejs:white_stag_hunt',

        player.x,

        player.y,

        player.z,

        player

    )

        if (ok) {
        level.runCommandSilent(
            `playsound cataclysm:enderguardian_music_1 music @a[distance=..32] ${player.x} ${player.y} ${player.z} 40 1.0`
        )
    }

    item.shrink(1)

})

ServerEvents.recipes(event => {

    event.remove({ id: "berserker_rpg:iron_berserker_axe" })

    event.shaped('berserker_rpg:iron_berserker_axe', [
        'AA ',
        'ACB',
        ' C '
    ], {
        A: 'species:werefang',
        B: 'kubejs:twilight_goat_hide',
        C: 'minecraft:chain'
    }).id('berserker_rpg:iron_berserker_axe')

    event.shaped('artifacts:steadfast_spikes', [
        '   ',
        'A A',
        'A A'
    ], {
        A: 'kubejs:twilight_goat_hide'
    }).id('artifacts:steadfast_spikes')

    event.shaped('kubejs:deer_effigy', [
        'ABA',
        ' C ',
        ' C '
    ], {
        A: 'primal:fallow_deer_antler',
        B: 'minecraft:bone_meal',
        C: 'minecraft:bone'
    }).id('kubejs:deer_effigy')

    event.shapeless('kubejs:fiddle', [
      'kubejs:apache_fiddle_bow',
      'kubejs:fiddle_body'
    ]).id('kubejs:fiddle')

    event.remove({ id: "goety:fanged_dagger" })

    event.shaped('goety:fanged_dagger', [
        '  A',
        ' B ',
        'C  '
    ], {
        A: 'totemic:buffalo_tooth',
        B: 'goety:venomous_fang',
        C: 'minecraft:stick'
    }).id('goety:fanged_dagger')

        event.shaped('artifacts:feral_claws', [
        'AB ',
        'A B',
        ' AB'
    ], {
        A: 'goety:venomous_fang',
        B: 'kubejs:stackatick_antenna'
    }).id('artifacts:feral_claws')
})