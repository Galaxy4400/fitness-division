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