import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link, navigate } from 'gatsby';
import styled from '@emotion/styled';
import Smile from '../images/Smile.svg';
import Busy from '../images/BusyPic.svg';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const SmilePic = styled.img`
	width: 48px;
	height: auto;
	margin: 5vh auto;
	display: block;
`;

const BusyPic = styled.img`
	width: 250px;
	height: auto;
	margin: 5vh auto;
	display: block;
`;

const PageContainer = styled.div`
	text-align: center;
	color: #4a4a4a;
	font-family: 'Dosis', sans-serif;
`;

const PatternBar = styled.div`
	margin-top: 30px;
	height: 15vh;
	width: 100%;
	background-color: #9cd7ff;
	background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%234a4a4a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const Gap = styled.div`
    width: 100%;
    height: 12vh;
`
// Section of the landing page with main content
const ContentSection = () => {
	return (
		<PageContainer>
			<Container>
				<h4>You're a busy human with lots of inputs...</h4>
				<BusyPic src={Busy} />
				<h4>And sometimes, you don't feel like yourself.</h4>
				<Gap />
				<h4>
					That's when you can find <br />
					center, <br />
					by identifying what makes you, you.
				</h4>
				<SmilePic src={Smile} />
                <Gap/>
				<h4>
					Take a breath, <br />
					reflect,
					<br />
					and make your centerbox.
				</h4>
				<Button color="primary" onClick={() => navigate('/ready')}>Get Started</Button>
                <Gap/>
                <h5>Want to know more?</h5>
                <h5>Read the <Link to='/story'>story</Link> behind Centerbox.</h5>
			</Container>
			<PatternBar />
		</PageContainer>
	);
};

export default ContentSection;
