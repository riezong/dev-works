// alert('Dev Works');

import { dateDice } from './date-dice';
import './style.css';
dateDice();

const tabSwitcher = (function () {
	const nav = document.querySelector('#nav');
	const navItemList = ['date-dice'];
	for (const item of navItemList) {
		const navItem = document.createElement('button');
		navItem.setAttribute('id', item);
		navItem.textContent = item.split('-').join(' ');
		nav.appendChild(navItem);
	}
})();
