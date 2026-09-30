ServerEvents.recipes(event => {
    event.remove({mod: 'rootsclassic', input: 'minecraft:red_tulip'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:chorus_fruit'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:pink_tulip'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:oxeye_daisy'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:rose_bush'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:poppy'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:allium'})

    event.remove({mod: 'rootsclassic', input: 'minecraft:clock'})
    event.remove({mod: 'rootsclassic', input: 'minecraft:flint'})

    event.remove({ mod: 'rootsclassic', output: '#minecraft:sheep' })
    event.remove({ mod: 'rootsclassic', output: '#minecraft:chicken' })
    event.remove({ mod: 'rootsclassic', output: '#minecraft:zombie' })
    event.remove({ mod: 'rootsclassic', output: '#minecraft:slime' })
    event.remove({ mod: 'rootsclassic', output: '#minecraft:enderman' })
    event.remove({ mod: 'rootsclassic', output: '#minecraft:creeper' })

    event.replaceOutput(
  { mod: 'rootsclassic', output: 'minecraft:cow' },        
  'minecraft:cow',                   
  Ingredient.of('#minecraft:fox') 
)
})