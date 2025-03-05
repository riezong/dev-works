// alert('Dev Works');

import { dateDice } from './date-dice';
import './style.css';
dateDice();

const nav = document.querySelector('#nav');
const navItemList = ['Date Dice'];
for (const item of navItemList) {
	const navItem = document.createElement('button');
	navItem.textContent = item;
	nav.appendChild(navItem);
}

const tabSwitcher = (function () {
	// event listeners
	const btn = document.querySelector('nav');
	function handleClick(event) {
		let target = event.target;
		switch (target.id) {
			case 'home':
				console.log('Home menu item was clicked');
				clearPage();
				home();
				break;
			case 'menu':
				console.log('Menu menu item was clicked');
				clearPage();
				menu();
				break;
			case 'about':
				console.log('About menu item was clicked');
				clearPage();
				contact();
				break;
		}
	}
	btn.addEventListener('click', handleClick);
})();
