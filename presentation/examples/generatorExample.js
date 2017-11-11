// генератор
function *createIterator() {
	yield 1;
	yield 2;
	yield 3;
}

// генератори викликаються як звичайні функції, але повертають ітератор
let iterator = createIterator();

console.log(iterator.next().value);     // 1
console.log(iterator.next().value);     // 2
console.log(iterator.next().value);     // 3