// експортуємо дані
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

// експортуємо функцію
export function sum(num1, num2) {
	return num1 + num1;
}

// експортуємо клас
export class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
}

// це приватна функція модуля
function subtract(num1, num2) {
	return num1 - num2;
}

// визначаємо функцію …
function multiply(num1, num2) {
	return num1 * num2;
}

// … експортуємо пізніше
export { multiply };