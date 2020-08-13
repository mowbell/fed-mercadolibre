import './styles.css';

import React, { useEffect, useState } from 'react';

import Container from '../../layout/Container';
import ErrorMessage from '../../components/ErrorMessage';
import ItemResult from '../../components/ItemResult';
import LoadingMessage from '../../components/LoadingMessage';
import { searchQuery } from '../../api';
import { useQuery } from '../../hooks';

function Results() {
	const query = useQuery();
	const queryString = query.get('search');
	const [ items, setItems ] = useState([]);
	const [ isLoading, setLoading ] = useState(false);
	const [ hasError, setHasError ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			setHasError(false);
			searchQuery(queryString)
				.then((resultsParsed) => {
					setItems(resultsParsed);
				})
				.catch(() => {
					setHasError(true);
				})
				.finally(() => {
					setLoading(false);
				});
			return () => {
				setLoading(false);
				setHasError(false);
			};
		},
		[ queryString ]
	);

	const renderItems = () => {
		return items.map((item) => <ItemResult data={item} key={item.id} />);
	};

	const canRenderItems = !isLoading && !hasError;
	return (
		<Container>
			<section className="col-md-offset-1 col-md-10 results">
				{canRenderItems && renderItems()}
				{!!isLoading && <LoadingMessage />}
				{!!hasError && <ErrorMessage />}
			</section>
		</Container>
	);
}

export default Results;
