import React from 'react';
import { navigate } from 'gatsby';
import { Container, Button } from 'reactstrap';
import styled from '@emotion/styled';
import Logo from '../images/Logo.svg';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const LogoImage = styled.img`
	width: 100px;
	height: 74px;
	margin: 10vh auto 0 auto;
	display: block;
`;

const PageContainer = styled.div`
	text-align: center;
	color: #4a4a4a;
	font-family: 'Dosis', sans-serif;
`;

const PatternBar = styled.div`
	margin: 12vh 0px;
	height: 15vh;
	width: 100%;
	background-color: #9cd7ff;
	background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%234a4a4a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

// The top banner of the landing page
const IndexSection = () => {
	return (
		<PageContainer>
			<Container>
				<LogoImage src={Logo} />
				<h1>Centerbox</h1>
				<h3>your toolbox to find yourself</h3>
				<br />
				<Button color="primary" onClick={() => navigate('/ready')}>
					Get Started
				</Button>
			</Container>
			<PatternBar />
		</PageContainer>
	);
};

export default IndexSection;
