/*
* Написати функцію, що прийматиме іншу функцію яка потребує колбека,
* і зроби так, щоб вона повертала проміс
* */

fetchUser(arg1, arg2,arg3, callback);
fetchUser(id)


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

function userDataCallback(err, data) {
console.log(arguments)
}

fetchUser(2, userDataCallback);

// Написати генератор чисел фібоначі використовуючи JS generators