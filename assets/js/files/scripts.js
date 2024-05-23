// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({animation: 'fadeIn'});

// Инициализация главного меню
new Menu('main-menu');

// Инициализация верхнего меню
new Menu('top-menu');

// Инициализация контейнера меню каталога
new Menu('cat-menu');

// Инициализация спойлера меню каталога
new Spoiler('cat-menu', {single: true});

// Инициализация меню фильтров
new Menu('filters-menu');

// Инициализация спойлера на детальной странице продукта
new Spoiler('product-info');

// Инициализация текста описания товара на детальной странице
new ProductDetailsText();



// Инициализация выбора всех продуктов каталога при нажатии на чекбокс
document.querySelectorAll('input[name="all"]').forEach(mainCheck => {
	mainCheck.addEventListener('change', () => {
		document.querySelectorAll('.cards-row input[type="checkbox"]').forEach(check => {
			check.checked = mainCheck.checked;
			check.dispatchEvent(new Event("change"));
		});
	});
});


// Инициализация появления кнопки очистки фильтров при выбранных фильтрах
document.querySelectorAll('.filter select').forEach(select => {
	select.addEventListener('change', () => {
		document.querySelector('.filters__btn').classList.add('_active');
	});
});


// Инициализация кнопки отчистки фильтров
document.querySelectorAll('.filters__btn').forEach(btn => {
	btn.addEventListener('click', () => {
		btn.classList.remove('_active');
		document.choices.filter.forEach(filterChoice => filterChoice.setChoiceByValue('0'));
	});
});