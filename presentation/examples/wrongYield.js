function *createIterator(items) {

	items.forEach(function(item) {

		// синтаксична помилка
		yield item + 1;
	});
}