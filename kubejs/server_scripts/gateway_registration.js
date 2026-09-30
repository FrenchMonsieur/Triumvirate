ServerEvents.highPriorityData(event => {

    Gateway.customBuilder('kubejs:twilight_goat_hunt')

        .entityTexture("triumvirate:textures/entity/gateway_hunt.png")

        .size('small')

            .bossBar(
       "minecraft:textures/gui/bars.png",
       "minecraft:textures/gui/bars.png",
       0, 10,
       0, 5,
       0, 0,  
       256, 256
    )

        .name('Twilight Hunt')

        .allowDiscarding(true)

        .addWave(wave => {

            wave.addEntity('goety:twilight_goat', 1)

            wave.addEntity('twilightforest:slime_beetle', 1)

            wave.maxTime(600)

        })

         .addWave(wave => {

            wave.addEntity('goety:twilight_goat', 2)

            wave.addEntity('twilightforest:slime_beetle', 1)

            wave.addEntity('twilightforest:pinch_beetle', 1)

            wave.maxTime(700)

        })

         .addWave(wave => {

            wave.addEntity('goety:twilight_goat', 3)
            
            wave.addEntity('twilightforest:slime_beetle', 1)

            wave.addEntity('twilightforest:pinch_beetle', 1)

            wave.addEntity('twilightforest:fire_beetle', 1)

            wave.maxTime(800)

        })
        .addReward('kubejs:twilight_goat_hide', 4)
        .addReward('minecraft:oak_log', 16)
        .addReward('embers:copper_nugget', 24)
        .register()

})

ServerEvents.highPriorityData(event => {

    Gateway.customBuilder('kubejs:bewereager_hunt')

        .entityTexture("triumvirate:textures/entity/gateway_hunt.png")

        .size('medium')

            .bossBar(
       "minecraft:textures/gui/bars.png",
       "minecraft:textures/gui/bars.png",
       0, 10,
       0, 5,
       0, 0,  
       256, 256
    )

        .name('Blood Hunt')

        .allowDiscarding(true)
        
        .addWave(wave => {

            wave.addEntity('twilightforest:hostile_wolf', 3)

            wave.addEntity('goety:hostile_black_wolf', 1)

            wave.maxTime(1200)

        })

        .addWave(wave => {

            wave.addEntity('species:bewereager', 1)

            wave.addEntity('twilightforest:mist_wolf', 1)

            wave.addEntity('twilightforest:hostile_wolf', 5)

            wave.maxTime(1300)

        })

         .addWave(wave => {

            wave.addEntity('species:bewereager', 2)

            wave.addEntity('twilightforest:mist_wolf', 2)

            wave.addEntity('goety:hostile_black_wolf', 2)

            wave.maxTime(1400)

        })
        .addReward('species:werefang', 6)
        .addReward('minecraft:beef', 16)
        .addReward('minecraft:iron_ingot', 8)
        .register()

})

ServerEvents.highPriorityData(event => {

    Gateway.customBuilder('kubejs:brood_hunt')

        .entityTexture("triumvirate:textures/entity/gateway_hunt.png")

        .size('large')

            .bossBar(
       "minecraft:textures/gui/bars.png",
       "minecraft:textures/gui/bars.png",
       0, 10,
       0, 5,
       0, 0,  
       256, 256
    )

        .name('Weaver Hunt')

        .allowDiscarding(true)

        .addAttribute('minecraft:generic.max_health', 0.5, 'multiply_total')

         .addWave(wave => {

            wave.addEntity('twilightforest:swarm_spider', 6)

            wave.addEntity('twilightforest:hedge_spider', 2)

            wave.maxTime(2400)

        })

         .addWave(wave => {

            wave.addEntity('minecraft:cave_spider', 3)

            wave.addEntity('goety:web_spider', 2)

            wave.addEntity('twilightforest:king_spider', 1)

            wave.maxTime(2500)

        })

        .addWave(wave => {

            wave.addEntity('goety:brood_mother', 1)

            wave.addEntity('twilightforest:swarm_spider', 4)

            wave.maxTime(2600)

        })
        .addReward('goety:venomous_fang', 2)
        .addReward('minecraft:spider_eye', 8)
        .addReward('minecraft:string', 16)
        .addReward('minecraft:gold_ingot', 10)
        .addReward('goety:spider_egg', 8)
        .register()

})

ServerEvents.highPriorityData(event => {

    Gateway.customBuilder('kubejs:white_stag_hunt')

        .entityTexture("triumvirate:textures/entity/gateway_hunt.png")

        .size('large')

        .bossBar(
       "minecraft:textures/gui/bars.png",
       "minecraft:textures/gui/bars.png",
       0, 10,
       0, 5,
       0, 0,  
       256, 256
    )

        .name('White Stag Hunt')

        .allowDiscarding(true)

        .addAttribute('minecraft:generic.max_health', 0.5, 'multiply_total')

        .addWave(wave => {

            wave.addEntity('whisperwoods:hirschgeist', 1)

            wave.maxTime(6000)

        })
        .addReward('minecraft:diamond', 2)
        .addReward('twilightforest:raw_venison', 32)
        .addReward('minecraft:gold_ingot', 16)
        .register()

})

