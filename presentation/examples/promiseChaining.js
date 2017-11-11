const promise = fetchUser();

promise
	.then(response => {

		//anotherFetch() повертає проміс
		return anotherFetch();
	})
	.then(response => {
		// цей блок виконається після того як anotherFetch завершить виконання
	})
	.catch(error => {

	});


const users = [1,2,3,4];

Promise.all(users.map(id => fetchUser(id)))
	.then(responses => {
		// responses => []
	});



