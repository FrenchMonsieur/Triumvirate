summon twilight_forest_final_boss:castle_keeper ~ ~ ~
summon species:wicked ~ ~1 ~3 {CustomName:'["Azmodan"]',CustomNameVisible:1b,Mana:5,ActiveEffects:[{Id:1,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:11,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:22,Duration:-1,Amplifier:2,ShowParticles:0b}]}
summon species:wicked ~ ~1 ~-3 {CustomName:'{"text":"Belial"}',CustomNameVisible:1b,Mana:5,ActiveEffects:[{Id:1,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:11,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:22,Duration:-1,Amplifier:2,ShowParticles:0b}]}
summon species:wicked ~3 ~1 ~ {CustomName:'{"text":"Duriel"}',CustomNameVisible:1b,Mana:5,ActiveEffects:[{Id:1,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:11,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:22,Duration:-1,Amplifier:2,ShowParticles:0b}]}
summon species:wicked ~-3 ~1 ~ {CustomName:'{"text":"Andariel"}',CustomNameVisible:1b,Mana:5,ActiveEffects:[{Id:1,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:11,Duration:-1,Amplifier:1,ShowParticles:0b},{Id:22,Duration:-1,Amplifier:2,ShowParticles:0b}]}
summon minecraft:lightning_bolt ~ ~7 ~
effect give @a[distance=0..15] minecraft:blindness 3 1 true
tellraw @a[distance=0..15] ["",{"text":"<Castle Keeper> Invader from the "},{"text":"Overworld","color":"dark_green"},{"text":", I speak to thee, for thou hast committed "},{"text":"sins ","color":"red"},{"text":"against "},{"text":"MY Kingdom","bold":true},{"text":". I shall not let thee go unpunished any longer. "},{"text":"BEGONE !","color":"dark_red"}]
playsound cataclysm:maledictus_music music @a[distance=0..15] ~ ~ ~ 1 1 1 