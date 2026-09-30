StartupEvents.registry('item', event => {
    event.create('parrot_feather').displayName('Parrot Feather').texture('triumvirate:item/parrot_feather')
})

StartupEvents.registry('item', event => {
    event.create('twilight_goat_hide').displayName('Twilight Goat Hide').texture('triumvirate:item/twilight_goat_hide')
})

StartupEvents.registry('item', event => {
    event.create('fiddle_body').displayName('Apache Fiddle Body').maxStackSize(1).texture('triumvirate:item/fiddle_body')
})

StartupEvents.registry('item', event => {
    event.create('stackatick_antenna').displayName('Stackatick Antenna').texture('triumvirate:item/stackatick_antenna')
})

StartupEvents.registry('item', event => {
    event.create('deer_effigy').displayName('Deer Effigy').texture('triumvirate:item/deer_effigy')
})

StartupEvents.registry('item', event => {
    event.create('awake_deer_effigy').displayName('Awakened Deer Effigy').texture('triumvirate:item/deer_effigy').glow(true).rarity('epic')
})

StartupEvents.registry('item', event => {
    event.create('obol_of_queen_aranea').displayName('Obol Of Queen Aranea').texture('triumvirate:item/obol_of_queen_aranea') .maxStackSize(1).rarity('uncommon')
})

StartupEvents.registry('item', event => {
    event.create('obol_of_king_ursa').displayName('Obol Of King Ursa').texture('triumvirate:item/obol_of_king_ursa') .maxStackSize(1).rarity('rare')
})

StartupEvents.registry('item', event => {
    event.create('obol_of_emperor_lupus').displayName('Obol Of Emperor Lupus').texture('triumvirate:item/obol_of_emperor_lupus') .maxStackSize(1).rarity('epic')
})

StartupEvents.registry('item', event => {
    event.create('cat_aspect').displayName('Cat Aspect').texture('triumvirate:item/cat_aspect') .maxStackSize(1).rarity('uncommon')
})

StartupEvents.registry('item', event => {
    event.create('cave_spider_aspect').displayName('Cave Spider Aspect').texture('triumvirate:item/cave_spider_aspect') .maxStackSize(1).rarity('uncommon')
})

StartupEvents.registry('item', event => {
    event.create('bee_aspect').displayName('Bee Aspect').texture('triumvirate:item/bee_aspect') .maxStackSize(1).rarity('uncommon')
})

StartupEvents.registry('item', event => {
    event.create('bear_aspect').displayName('Bear Aspect').texture('triumvirate:item/bear_aspect') .maxStackSize(1).rarity('rare')
})

StartupEvents.registry('item', event => {
    event.create('fire_beetle_aspect').displayName('Fire Beetle Aspect').texture('triumvirate:item/fire_beetle_aspect') .maxStackSize(1).rarity('rare')
})

StartupEvents.registry('item', event => {
    event.create('lionfish_aspect').displayName('Lionfish Aspect').texture('triumvirate:item/lionfish_aspect') .maxStackSize(1).rarity('rare')
})

StartupEvents.registry('item', event => {
    event.create('ravager_aspect').displayName('Ravager Aspect').texture('triumvirate:item/ravager_aspect') .maxStackSize(1).rarity('epic')
})

StartupEvents.registry('item', event => {
    event.create('queen_bee_aspect').displayName('Queen Bee Aspect').texture('triumvirate:item/queen_bee_aspect') .maxStackSize(1).rarity('epic')
})

StartupEvents.registry('item', event => {
    event.create('gnasher_aspect').displayName('Gnasher Aspect').texture('triumvirate:item/gnasher_aspect') .maxStackSize(1).rarity('epic')
})

StartupEvents.registry("item", event => {
    event.create("apache_fiddle_bow", "bow").maxStackSize(1).texture('triumvirate:item/apache_fiddle_bow').bow (bow => {
        bow
        .modifyBow(attribute => {
            attribute
            .arrowSpeed(2.5)
            .baseDamage(1.0)
            .fullChargeTick(10)
        })
    })
  })
