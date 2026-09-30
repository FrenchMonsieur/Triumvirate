craftingTable.removeByName("totemic:medicine_bag");

craftingTable.addShaped("totemic.medicine_bag", <item:totemic:medicine_bag>, [
    [<item:totemic:cedar_planks>, <item:minecraft:string>, <item:totemic:buffalo_tooth>],
    [<item:totemic:buffalo_hide>, <item:minecraft:emerald>, <item:totemic:buffalo_hide>],
    [<item:minecraft:air>, <item:totemic:buffalo_hide>, <item:minecraft:air>]]);

craftingTable.addShaped("block_primal_chomp_trap_green", <item:primal:chomp_trap_green> * 1, [
    [<item:primal:crocodile_scute>, <item:totemic:buffalo_tooth>, <item:primal:crocodile_scute>], 
    [<item:primal:crocodile_scute>, <item:totemic:buffalo_tooth>, <item:primal:crocodile_scute>], 
    [<item:minecraft:redstone>, <item:primal:crocodile_scute_block>, <item:minecraft:redstone>]]);

craftingTable.addShaped("block_primal_chomp_trap_arid", <item:primal:chomp_trap_arid> * 1, [
    [<item:primal:crocodile_scute>, <item:totemic:buffalo_tooth>, <item:primal:crocodile_scute>],
    [<item:primal:crocodile_scute>, <item:totemic:buffalo_tooth>, <item:primal:crocodile_scute>], 
    [<item:minecraft:redstone>, <item:primal:arid_crocodile_scute_block>, <item:minecraft:redstone>]]);

craftingTable.addShaped("block_primal_chomp_trap_humid", <item:primal:chomp_trap_humid> * 1, [
    [<item:primal:crocodile_scute>, <item:totemic:buffalo_tooth>, <item:primal:crocodile_scute>], 
    [<item:primal:crocodile_scute>, <item:totemic:buffalo_tooth>, <item:primal:crocodile_scute>], 
    [<item:minecraft:redstone>, <item:primal:humid_crocodile_scute_block>, <item:minecraft:redstone>]]);

craftingTable.addShaped("item_berserker_rpg_northling_chestplate", <item:berserker_rpg:northling_chest> * 1, [
    [<item:more_rpg_classes:polar_bear_fur>, <item:totemic:buffalo_tooth>, <item:more_rpg_classes:polar_bear_fur>], 
    [<item:totemic:buffalo_hide>, <item:more_rpg_classes:polar_bear_fur>, <item:totemic:buffalo_hide>], 
    [<item:totemic:buffalo_hide>, <item:minecraft:chain>, <item:totemic:buffalo_hide>]]);

craftingTable.removeByName("berserker_rpg:northling_chest");

craftingTable.addShaped("item_berserker_rpg_northling_legs", <item:berserker_rpg:northling_legs> * 1, [
    [<item:more_rpg_classes:polar_bear_fur>, <item:more_rpg_classes:polar_bear_fur>, <item:more_rpg_classes:polar_bear_fur>], 
    [<item:more_rpg_classes:polar_bear_fur>, <item:minecraft:air>, <item:totemic:buffalo_hide>], 
    [<item:totemic:buffalo_hide>, <item:minecraft:air>, <item:totemic:buffalo_hide>]]);

craftingTable.removeByName("berserker_rpg:northling_legs");

craftingTable.addShaped("item_berserker_rpg_northling_feet", <item:berserker_rpg:northling_feet> * 1, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:totemic:buffalo_hide>, <item:minecraft:air>, <item:totemic:buffalo_hide>], 
    [<item:more_rpg_classes:polar_bear_fur>, <item:minecraft:air>, <item:more_rpg_classes:polar_bear_fur>]]);

craftingTable.removeByName("berserker_rpg:northling_feet");

craftingTable.addShaped("item_totemic_eagle_bone_whistle", <item:totemic:eagle_bone_whistle> * 1, [
    [<item:kubejs:parrot_feather>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:totemic:eagle_bone>, <item:minecraft:string>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

craftingTable.addShaped("item_kubejs_fiddle_body", <item:kubejs:fiddle_body> * 1, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:stick>], 
    [<item:minecraft:air>, <item:minecraft:bone>, <item:minecraft:air>], 
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:air>]]);

craftingTable.addShaped("item_kubejs_apache_fiddle_bow", <item:kubejs:apache_fiddle_bow> * 1, [
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>], 
    [<item:minecraft:bone>, <item:kubejs:stackatick_antenna>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);

craftingTable.addShapeless("item_minecraft_string", <item:minecraft:string> * 2, [
  <item:kubejs:stackatick_antenna>]);

craftingTable.addShapeless("item_minecraft_leather", <item:minecraft:leather> * 1, [
  <item:kubejs:twilight_goat_hide>, <item:kubejs:twilight_goat_hide>]);

smithing.removeByName("berserker_rpg:netherite_northling_head");

craftingTable.addShaped("item_berserker_rpg_netherite_northling_head", <item:berserker_rpg:netherite_northling_head> * 1, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:kubejs:twilight_goat_hide>, <item:berserker_rpg:northling_head>, <item:kubejs:twilight_goat_hide>], 
    [<item:kubejs:twilight_goat_hide>, <item:species:werefang>, <item:kubejs:twilight_goat_hide>]]);

smithing.removeByName("berserker_rpg:netherite_northling_chest");

craftingTable.addShaped("item_berserker_rpg_netherite_northling_chest", <item:berserker_rpg:netherite_northling_chest> * 1, [
    [<item:species:werefang>, <item:species:werefang>, <item:species:werefang>], 
    [<item:kubejs:twilight_goat_hide>, <item:berserker_rpg:northling_chest>, <item:kubejs:twilight_goat_hide>], 
    [<item:kubejs:twilight_goat_hide>, <item:minecraft:iron_ingot>, <item:kubejs:twilight_goat_hide>]]);

smithing.removeByName("berserker_rpg:netherite_northling_legs");

craftingTable.addShaped("item_berserker_rpg_netherite_northling_legs", <item:berserker_rpg:netherite_northling_legs> * 1, [
    [<item:species:werefang>, <item:berserker_rpg:northling_legs>, <item:species:werefang>], 
    [<item:kubejs:twilight_goat_hide>, <item:minecraft:air>, <item:kubejs:twilight_goat_hide>], 
    [<item:kubejs:twilight_goat_hide>, <item:minecraft:air>, <item:kubejs:twilight_goat_hide>]]);

smithing.removeByName("berserker_rpg:netherite_northling_feet");

craftingTable.addShaped("item_netherite_northling_feet", <item:berserker_rpg:netherite_northling_feet> * 1, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:kubejs:twilight_goat_hide>, <item:berserker_rpg:northling_feet>, <item:kubejs:twilight_goat_hide>], 
    [<item:species:werefang>, <item:minecraft:air>, <item:species:werefang>]]);

craftingTable.removeByName("more_rpg_classes:polar_bear_fur_wool");

craftingTable.addShapeless("item_brown_wool", <item:minecraft:brown_wool> * 1, [
  <item:more_rpg_classes:polar_bear_fur>, <item:more_rpg_classes:polar_bear_fur>]);