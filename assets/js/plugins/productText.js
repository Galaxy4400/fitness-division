class ProductDetailsText {
	static #maxHeight = 240;

	constructor() {
		this.container = document.querySelector('.product-details-desc');

		if (!this.container) return;

		this.content = this.container.querySelector('.product-details-desc__content');
		this.text = this.container.querySelector('.product-details-desc__text');
		this.button = this.container.querySelector('.product-details-desc__btn');

		this.init();
		this.initOnResize();
	}

	init() {
		console.clear();

		const textHeight = this.text.scrollHeight;
		const isTextOverflow = textHeight > ProductDetailsText.#maxHeight 
		const contentHeight = isTextOverflow ? ProductDetailsText.#maxHeight : textHeight;

		this.content.style.height = `${contentHeight}px`;
		this.button.classList.remove('_show');

		if (!isTextOverflow) return;

		this.button.classList.add('_show');

		this.button.onclick = () => {
			this.container.classList.toggle('_active');

			if (this.container.classList.contains('_active')) {
				this.content.style.height = `${textHeight}px`;
				this.button.textContent = "Свернуть описание";
			} else {
				this.content.style.height = `${contentHeight}px`;
				this.button.textContent = "Полное описание";
			}
		};
	}

	initOnResize() {
		let timeout;
		window.addEventListener('resize', () => {
			clearTimeout(timeout);
			timeout = setTimeout(this.init.bind(this), 250);
		});
	}
}