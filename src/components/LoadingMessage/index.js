import React from 'react';
import styled from 'styled-components';

const LoadingMessageBox = styled.div`
	padding: 2rem;
	font-size: 1.5rem;
`;

function LoadingMessage() {
	return <LoadingMessageBox className="center-xs">Cargando...</LoadingMessageBox>;
}

export default LoadingMessage;
