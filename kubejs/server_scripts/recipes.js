ServerEvents.recipes(event => {
    // Крафт пустотного апгрейда для Lightman's Currency
    event.shaped('lightmanscurrency:void_upgrade', [
        'III',
        'OLO',
        'III'
    ], {
        I: 'minecraft:iron_ingot',
        O: 'minecraft:obsidian',
        L: 'minecraft:lava_bucket'
    });
});