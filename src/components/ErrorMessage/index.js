import React from 'react';
import styled from 'styled-components';

const ErrorMessageBox = styled.div`
	padding: 2rem;
	font-size: 1.5rem;
	color: red;
`;

function ErrorMessage() {
	return <ErrorMessageBox className="center-xs">Ups Error! Recarga la página</ErrorMessageBox>;
}

export default ErrorMessage;
