// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({animation: 'fadeIn'});

// Инициализация главного меню
new Menu('main-menu');

// Инициализация верхнего меню
new Menu('top-menu');

// Инициализация меню каталога
new Menu('cat-menu');

// Инициализация меню фильтров
new Menu('filters-menu');

// Инициализация меню фильтров
new Spoiler('product-info');



// Инициализация выбора всех продуктов каталога при нажатии на чекбокс
document.querySelectorAll('input[name="all"]').forEach(mainCheck => {
	mainCheck.addEventListener('change', () => {
		document.querySelectorAll('.cards-row input[type="checkbox"]').forEach(check => {
			check.checked = mainCheck.checked;
			check.dispatchEvent(new Event("change"));
		});
	});
});