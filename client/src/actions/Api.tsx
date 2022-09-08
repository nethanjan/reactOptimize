import axios from "axios";

export default {
	runGraphQLRequest(
		request_type: string,
		type: string,
		action: string,
		fields: any
	): Promise<any> {
		// const query = jsonToGraphQLQuery(fields, { pretty: true });

		const options = {
			method: request_type,
			url: "/graphql",
			headers: {
				"content-type": "application/json",
			},
			data: {
				[type]: fields,
			},
			proxy: {
				host: "localhost",
				port: 3001,
			},
		};

		return new Promise((resolve, reject) => {
			axios
				.request(options)
				.then((result) => {
					resolve(result.data.data[action]);
				})
				.catch((error: any) => {
					reject();
				});
		});
	},
};
