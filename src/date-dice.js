const dateDiceData = (function () {
	const diceLabels = ['Activity 1', 'Activity 2', 'Food 1', 'Food 2'];
	const activityDice1Options = [
		'Outdoor Nature',
		'Indoor Culture',
		'Games & Fun',
		'Creative Arts',
		'Relaxation & Chill',
		'Active & Moving',
	];
	const activityDice2Options = [
		'Local Exploration',
		'Learn Something New',
		'Competitive Edge',
		'Themed Fun',
		'Just Chat & Connect',
		'Budget Friendly',
	];
	const foodDice1Options = [
		'Japanese',
		'Italian',
		'Korean',
		'Noodle',
		'BBQ',
		'Steak',
	];
	const foodDice2Options = [
		'Casual Cafe/Deli',
		'Food Truck Fun',
		'Restaurant Patio',
		'Cozy Bistro',
		'Themed Restaurant',
		'Splurge Worthy',
	];

	class Dice {
		constructor(array) {
			this.array = array;
			// console.log(typeof this.array);
			// console.log(array.split(','));
		}

		rollDice() {
			let arrayLength = this.array.length;
			let min = Math.ceil(0); // Ensure min is rounded up to nearest integer
			let max = Math.floor(arrayLength); // Ensure max is rounded down to nearest integer
			let result = Math.floor(Math.random() * (max - min)) + min;
			// console.log(result);
			console.log(this.array[result]);
		}
	}
	return {
		diceLabels,
		activityDice1Options,
		activityDice2Options,
		foodDice1Options,
		foodDice2Options,
		Dice,
	};
})();

// Render
const render = function () {
	const content = document.querySelector('#content');

	const h1 = document.createElement('h1');
	h1.textContent = 'Welcome to Date Dice';

	const about = document.createElement('p');
	about.textContent =
		"Don't know what to do? Just roll the dice and let fate lead your way!";

	content.appendChild(h1);
	content.appendChild(about);

	// Buttons
	const numberOfDice = 4;
	for (let i = 0; i < numberOfDice; i++) {
		const dice = document.createElement('button');
		dice.setAttribute('id', 'dice-' + [i]);
		dice.addEventListener('click', handleClick);
		function handleClick() {
			switch (i) {
				case 0:
					const activityDice1 = new dateDiceData.Dice(
						dateDiceData.activityDice1Options
					);
					activityDice1.rollDice();
					break;
				case 1:
					const activityDice2 = new dateDiceData.Dice(
						dateDiceData.activityDice2Options
					);
					activityDice2.rollDice();
					break;
				case 2:
					const foodDice1 = new dateDiceData.Dice(
						dateDiceData.foodDice1Options
					);
					foodDice1.rollDice();
					break;
				case 3:
					const foodDice2 = new dateDiceData.Dice(
						dateDiceData.foodDice2Options
					);
					foodDice2.rollDice();
					break;
			}
		}
		dice.textContent = dateDiceData.diceLabels[i];
		content.appendChild(dice);
	}
};

const dateDice = function () {
	render();
};

export { dateDice };
