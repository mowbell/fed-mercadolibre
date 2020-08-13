import './styles.css';

import { Link } from 'react-router-dom';
import React from 'react';

function ItemResult({ data }) {
	const { id, price, title, thumbnail, city, isFreeShipping } = data;
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	const priceFormated = formatter.format(price);
	return (
		<Link to={`items/${id}`} className="item-result row" key={id}>
			<div className="item-result__info">
				<div className="item-result__thumbnail">
					<img src={thumbnail} alt={title} />
				</div>
				<div className="item-result__details">
					<span className="item-result__price">{priceFormated}</span>
					<p className="item-result__title">{title}</p>
				</div>
			</div>
			<div className="item-result__city">{city}</div>
		</Link>
	);
}

export default ItemResult;
