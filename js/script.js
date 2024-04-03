// Функція для переключення видимості блоку з меню бургером та приховання інших блоків
function toggleMenu() {
    menuBurgerInfo.classList.toggle('hidden');

    // Визначаємо всі інші блоки на сторінці
    var otherBlocks = document.querySelectorAll('.landingPage > *:not(#menuBurgerInfo)');
    
    // Ітеруємося по кожному блоку та приховуємо його
    otherBlocks.forEach(function(block) {
        block.classList.toggle('hidden');
    });
}

function backToMenu() {
    toggleMenu(); // Викликаємо toggleMenu() для згортання меню
}
