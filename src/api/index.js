import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://api.mercadolibre.com'
});

export const searchQuery = (queryString) => {
	return axiosInstance.get('/sites/MLA/search?limit=4&q=' + queryString).then(({ data }) => {
		const { results } = data;
		let resultsParsed = [];
		if (results.length > 0) {
			resultsParsed = results.map((item) => {
				const { id, price, title, thumbnail, address: { city_name }, shipping: { free_shipping } } = item;
				return {
					id,
					price,
					title,
					thumbnail,
					city: city_name,
					isFreeShipping: free_shipping
				};
			});
		}
		return resultsParsed;
	});
};

export const getItemIinfo = (itemID) => {
	const getItemInfo = axiosInstance.get(`items/${itemID}`);
	const getItemDescription = axiosInstance.get(`items/${itemID}/description`);
	let item;
	let description;
	let category;
	return axios
		.all([ getItemInfo, getItemDescription ])
		.then((responses) => {
			item = responses[0].data;
			description = responses[1].data;
			return axiosInstance.get(`categories/${item.category_id}`);
		})
		.then((categoryResponse) => {
			category = categoryResponse.data;
			const picture = item.pictures[0].url;
			const categories = category.path_from_root.map((cat) => cat.name);
			const desc = description.plain_text;

			const { price, condition, title, sold_quantity } = item;
			const isNew = condition === 'new';
			return {
				picture,
				categories,
				description: desc,
				isNew,
				price,
				title,
				soldQuantity: sold_quantity
			};
		});
};
