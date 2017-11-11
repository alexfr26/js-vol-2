export default function () {
	return new Promise(function (resolve, reject) {
		fetchData(function (error, data) {

			if (error) {
				reject(error);
				return;
			}

			resolve(data);

		})
	})

}