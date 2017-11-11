const promise = fetchList();

promise
	.then(onSuccess, onError)
	.then(null, onError)
	.catch(onError)
