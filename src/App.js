import './App.css';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Detail from './pages/Detail';
import Home from './pages/Home';
import React from 'react';
import Results from './pages/Results/index';
import SearchBox from './components/SearchBox';
import styled from 'styled-components';

const MainContainer = styled.main`background-color: "#EEE";`;

function App() {
	return (
		<Router>
			<MainContainer>
				<SearchBox />
				<Switch>
					<Route path="/items/:id">
						<Detail />
					</Route>
					<Route path="/items">
						<Results />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</MainContainer>
		</Router>
	);
}

export default App;
