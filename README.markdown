# Homework

* Create Fibonacci numbers generator using JavaScript generators

* Create `promisify` function that accepts some async function with callback as last argument and returns a new function, like a taken function, but new function should return a promise;

Function with callback:

 ```
 function fetchUser(id, callback) {
 	const users = {
 		1: {
 			uid: 1,
 			name: 'John Doe',
 			age: 22
 		}
 	};

 	const selectedUser = users[id];

 	const error = selectedUser ? null : 'No User Found';

 	setTimeout(function () {
 		callback(error, selectedUser)
 	}, 500)
 }
 ```
 
 Write function `promisify` that make it possible to do the following: 
 
 ```
 const promisify = (fn) => {
  // your code here
 }
 
 const promisifiedFetchUser = promisify(fetchUser);
 
 promisifiedFetchUser(1)
  .then(response => console.log(`User data: ${response}`))
  .catch(error => console.log(`An error happened: ${error}`))
 
 ```
 
 

