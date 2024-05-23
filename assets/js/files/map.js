// Дождёмся загрузки API и готовности DOM.
ymaps.ready(initMaps);

document.maps = [];

let mapTimeout;
window.addEventListener('resize', () => {
	clearTimeout(mapTimeout);
	mapTimeout = setTimeout(initMaps, 250);
});

function destroyMaps() {
	document.maps.forEach(map => map.destroy());
}


function initMaps() {
	destroyMaps();

	initMainMap();
	initContactMap1();
	initContactMap2();
}



function initMainMap() {
	if (!document.getElementById('delivery-map')) return;

	//Создаём карту
	const map = new ymaps.Map('delivery-map', {
		center: [55.902797, 37.546821],
		zoom: 16,
		controls: ['zoomControl'],
	});

	//Устанавливаем маркер
	map.geoObjects.add(new ymaps.Placemark([55.902797, 37.546821], {
		balloonContent: '<strong>FITNESS<br>DIVISION</strong>',
	}, {
			preset: 'islands#dotIcon',
			iconColor: '#2FB4C6',
	}));

	//Убираем возможность скролить и перетаскивать
	map.behaviors.disable('scrollZoom');
	map.behaviors.disable('multiTouch');
	map.behaviors.disable('drag');

	document.maps.push(map);
}



function initContactMap1() {
	if (!document.getElementById('contact-map-1')) return;

	//Создаём карту
	const map = new ymaps.Map('contact-map-1', {
		center: [55.737157, 37.433445],
		zoom: 16,
		controls: ['zoomControl'],
	});

	//Устанавливаем маркер
	map.geoObjects.add(new ymaps.Placemark([55.737157, 37.433445], {
		balloonContent: '<strong>FITNESS<br>DIVISION</strong>',
	}, {
			preset: 'islands#dotIcon',
			iconColor: '#2FB4C6',
	}));

	//Убираем возможность скролить и перетаскивать
	map.behaviors.disable('scrollZoom');
	map.behaviors.disable('multiTouch');
	map.behaviors.disable('drag');

	document.maps.push(map);
}



function initContactMap2() {
	if (!document.getElementById('contact-map-2')) return;

	//Создаём карту
	const map = new ymaps.Map('contact-map-2', {
		center: [55.737157, 37.433445],
		zoom: 16,
		controls: ['zoomControl'],
	});

	//Устанавливаем маркер
	map.geoObjects.add(new ymaps.Placemark([55.737157, 37.433445], {
		balloonContent: '<strong>FITNESS<br>DIVISION</strong>',
	}, {
			preset: 'islands#dotIcon',
			iconColor: '#2FB4C6',
	}));

	//Убираем возможность скролить и перетаскивать
	map.behaviors.disable('scrollZoom');
	map.behaviors.disable('multiTouch');
	map.behaviors.disable('drag');

	document.maps.push(map);
}