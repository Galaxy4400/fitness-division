class ProductDetailsText {
	constructor() {
		this.container = document.querySelector('.product-details-desc');

		if (!this.container) return;

		this.content = this.container.querySelector('.product-details-desc__content');
		this.text = this.container.querySelector('.product-details-desc__text');
		this.button = this.container.querySelector('.product-details-desc__btn');

		this._init();
	}

	_init() {
		this.button.addEventListener('click', () => {
			this.container.classList.toggle('_active');

			if (this.container.classList.contains('_active')) {
				this.content.style.height = this.text.scrollHeight + 50 + "px";
				this.button.textContent = "Свернуть описание";
			} else {
				this.content.style.height = "100%";
				this.button.textContent = "Полное описание";
			}
		});
	}
}