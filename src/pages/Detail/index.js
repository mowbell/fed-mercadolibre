import './styles.css';

import React, { useEffect, useState } from 'react';

import Container from '../../layout/Container';
import ErrorMessage from '../../components/ErrorMessage';
import ItemDetails from '../../components/ItemDetails';
import LoadingMessage from '../../components/LoadingMessage';
import { getItemIinfo } from '../../api';
import { useParams } from 'react-router-dom';

function Detail() {
	const { id } = useParams();
	const [ item, setItem ] = useState(null);
	const [ isLoading, setLoading ] = useState(false);
	const [ hasError, setHasError ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			setHasError(false);
			getItemIinfo(id)
				.then((itemInfo) => {
					setItem(itemInfo);
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
		[ id ]
	);
	const canRenderItem = !isLoading && !hasError && item !== null;

	return (
		<Container>
			{canRenderItem && <ItemDetails data={item} />}
			{!!isLoading && <LoadingMessage />}
			{!!hasError && <ErrorMessage />}
		</Container>
	);
}

export default Detail;
