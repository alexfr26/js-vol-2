async function init() {

	const user = await fetchUser();

	const userFriends = await fetchFriends(user.id);

}

async function init() {
	const usersIds = [1, 2, 3, 4];

	const users = await Promise.all(usersIds.map(id => fetchUser(id)));

}






