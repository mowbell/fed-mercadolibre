import './styles.css';

import React from 'react';

function ItemDetails({ data }) {
	const { picture, title, isNew, categories, soldQuantity, price, description } = data;
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	const priceFormated = formatter.format(price);
	const isNewText = isNew ? 'Nuevo -' : '';
	const breadcrumbTextStart = categories.slice(0, -1).join(' > ') + ' > ';
	const breadcrumbTextEnd = categories.slice(-1);
	const itemsSoldText = `${soldQuantity} vendidos`;
	return (
		<div className="item-details">
			<div className="row ">
				<div className="col-xs-offset-1 item-details__breadcrumb">
					<span className="item-details__breadcrumb--start">{breadcrumbTextStart}</span>
					<span className="item-details__breadcrumb--end">{breadcrumbTextEnd}</span>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-offset-1 col-xs-10   col-md-7 middle-xs center-xs item-details__picture">
					<img src={picture} alt={title} />
				</div>
				<div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-3 item-details__info">
					<p className="item-details__sold-qty">
						{isNewText}
						{itemsSoldText}
					</p>
					<p className="item-details__title">{title}</p>
					<p className="item-details__price">{priceFormated}</p>
					<button type="button" className="item-details__buy-btn">
						Comprar
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-offset-1 col-xs-10 item-details__description">
					<p className="item-details__description-label">Descripcion del producto</p>
					<p className="item-details__description-text">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
