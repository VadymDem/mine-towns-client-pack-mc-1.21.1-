RecipeViewerEvents.removeEntries('item', event => {
    // Регулярные выражения для удаления групп предметов:
    event.remove(/lightmanscurrency:coin.*_diamond/);       // Алмазные монеты/стопки/блоки
    event.remove(/lightmanscurrency:coin.*_netherite/);     // Незеритовые монеты/стопки/блоки
    event.remove(/lightmanscurrency:coin.*_ancient/);       // Древние монеты (Ancient Coins)
    event.remove(/lightmanscurrency:auction_stand_.*/);     // Все аукционные стенды (любая древесина)

    // Конкретные блоки и механизмы
    event.remove([
        'lightmanscurrency:coinmint',                       // Машина для чеканки монет
        'lightmanscurrency:tax_block'                       // Налоговый инспектор (Tax Collector)
    ]);
});