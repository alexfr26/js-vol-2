export default function(num1, num2) {
	return num1 + num2;
}

function sum(num1, num2) {
	return num1 + num2;
}

export default sum;

function sum(num1, num2) {
	return num1 + num2;
}

export { sum as default };

// import
import sum from "./example";

import sum, { color } from "./example.js";

import { default as sum, color } from "example";