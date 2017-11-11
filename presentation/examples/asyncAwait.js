async function init() {

	const user = await fetchUser();

	const userFriends = await fetchFriends(user.id);

}

async function init() {
	let user;

	try {
		user = await fetchUser();
	} catch (error) {

	}
}

async function init() {
	let users;
	const usersIds = [1, 2, 3, 4];

	try {
		users = await Promise.all(usersIds.map(id => fetchUser(id)));
	} catch (error) {

	}
}






