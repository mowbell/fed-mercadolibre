import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import Container from '../../layout/Container';
import { useQuery } from '../../hooks';

function SearchBox() {
	const inputRef = useRef(null);
	const history = useHistory();
	const query = useQuery();
	const queryString = query.get('search');
	const [ searchText, setSearchText ] = useState('');
	const onChange = (e) => {
		setSearchText(e.target.value);
	};

	useEffect(
		() => {
			setSearchText(queryString || '');
		},
		[ queryString ]
	);

	return (
		<form
			className="search-box"
			onSubmit={(e) => {
				e.preventDefault();
				history.push('/items?search=' + encodeURI(inputRef.current.value));
			}}
		>
			<Container className="search-box__container">
				<div className="row middle-xs">
					<div className="col-xs-offset-1 col-xs-1">
						<Link to="/">
							<img className="search-box__logo" src="/logo.png" alt="Go home" />
						</Link>
					</div>
					<div className="col-xs-9">
						<div className="row ">
							<input
								className="search-box__input"
								ref={inputRef}
								type="text"
								placeholder="Nunca dejes de buscar"
								value={searchText}
								onChange={onChange}
							/>
							<button className="search-box__btn">
								<img src="/ic_Search.png" alt="Search" />
							</button>
						</div>
					</div>
				</div>
			</Container>
		</form>
	);
}

export default SearchBox;
