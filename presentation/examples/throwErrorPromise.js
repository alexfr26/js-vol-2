let promise = new Promise(function(resolve, reject) {
	throw new Error("Explosion!");
});

promise.catch(function(error) {
	console.log(error.message);     // "Explosion!"
});