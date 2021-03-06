window.onload = function () {
	document.querySelector('.js-header-burger').addEventListener('click', function () {

		document.querySelector('.nav__detailed-block_mobile').classList.toggle('nav__detailed-block_active');
		document.querySelector('.nav__bg').classList.toggle('nav__bg_active');
	});

	document.querySelector('.js-nav-burger').addEventListener('click', function () {
		// Removing active class on hovered dropdown
		document.querySelector('.nav__detailed-block_desktop').classList.remove('nav__detailed-block_hover-active')
		document.querySelectorAll('.js-nav-main-link').forEach((item) => { item.classList.remove('list__element_active') })
		document.querySelectorAll('.js-nav-list').forEach((item) => { item.classList.remove('variants-list_active') })


		document.querySelector('.nav__detailed-block').classList.toggle('nav__detailed-block_active')
	});

	// Colors
	(function () {	
		if (document.querySelector(`.js-text-color-selectors`)) {
			getValueFromColorSelector('color');
			getValueFromColorSelector('stroke');
			getValueFromColorSelector('shadow');
			function getValueFromColorSelector(selectorType) {
				let textColorSelectorBlock = document.querySelector(`.js-text-${selectorType}-selectors`);
				let textColorSelectors = [...textColorSelectorBlock.children];
				let textExample = document.querySelector('.js-editable-text');
	
				textColorSelectors.map((selector) => {
					selector.querySelector('.color-selector div').addEventListener('click', (e) => {
						let color = e.target.dataset.color;
						if (selectorType === 'color') {
							textExample.style['-webkit-text-fill-color'] = color
						} else if (selectorType === 'stroke') {
							textExample.style['-webkit-text-stroke'] = '3px ' + color
						} else if (selectorType === 'shadow') {
							textExample.style.textShadow = '0 0 20px ' + color
						}
					})
				})
			}
		}
		


	})();

	// popup
	(function () {
		if (document.querySelector('.popup-block')) {
			document.querySelector('.js-close-popup').addEventListener('click', () => {
				document.querySelector('.popup-block').classList.remove('popup-block_active')
			})
			document.querySelector('body').addEventListener('click', (e) => {
				if (e.target === document.querySelector('.popup-bg')) {
					document.querySelector('.popup-block').classList.remove('popup-block_active')
				}
			})
		}
	})();

	// Desktop nav list
	(function () {
		let navHeadersList = document.querySelectorAll('.js-nav-header');
		let navListsList = document.querySelectorAll('.js-nav-list');
		let listIndex = 0;
		navHeadersList.forEach(function (item, index) {
			item.addEventListener('click', (e) => {
				debugger
				listIndex = index;
				navListsList.forEach((element, index) => {
					if (listIndex === index)
						element.classList.add('variants-list_active');
					else
						element.classList.remove('variants-list_active');
				})
			})
		});
	})();

	// Mobile nav list
	(function () {
		let navHeadersList = document.querySelectorAll('.js-mobile-nav-header');
		let navListsList = document.querySelectorAll('.js-mobile-nav-list');
		let listIndex = 0;
		navHeadersList.forEach(function (item, index) {
			item.addEventListener('click', (e) => {
				listIndex = index;

				navListsList.forEach((element, index) => {
					let currentHeader = navHeadersList[index];
					if (listIndex === index) {
						currentHeader.classList.toggle('details__header_active')
						element.classList.toggle('variants-list_active');
					} else {
						element.classList.remove('variants-list_active');
						currentHeader.classList.remove('details__header_active');
					}

				})
			})
		});
	})();

	(function () {
		let mainLinks = document.querySelectorAll('.js-nav-main-link'); 	// visible links in nav
		let hoveredLists = document.querySelectorAll('.js-nav-list')	// lists in dropdown
		mainLinks.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				document.querySelector('.nav__detailed-block_desktop').classList.remove('nav__detailed-block_active')
				document.querySelector('.nav__detailed-block_desktop').classList.add('nav__detailed-block_hover-active')

				// Reset active for all elements
				hoveredLists.forEach((item, counter) => {
					if (counter === index)
						item.classList.toggle('variants-list_active')
					else
						item.classList.remove('variants-list_active')

				})
				let includesActiveList = false;
				mainLinks.forEach((item, counter) => {
					if (counter === index)
						item.classList.toggle('list__element_active')
					else
						item.classList.remove('list__element_active')

					if (item.className.includes('list__element_active')) {
						includesActiveList = true
					}
				})

				if (includesActiveList) {
					document.querySelector('.nav__detailed-block_desktop').classList.add('nav__detailed-block_hover-active')
				} else
					document.querySelector('.nav__detailed-block_desktop').classList.remove('nav__detailed-block_hover-active')


			})
		})
	})()
};

function showPopup() {
	document.querySelector('.popup-block').classList.add('popup-block_active')
}