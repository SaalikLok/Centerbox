import React from 'react';
import styled from '@emotion/styled';
import { Fade } from 'reactstrap';

const Containing = styled.div`
	width: 80%;
	height: 80%;
	margin: 0 auto;
	background-color: #9cd7ff;
	background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%234a4a4a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const PageHead = styled.h2`
    margin: 10vh 0;
`

const InsideCard = styled.div`
	width: 80%;
	height: 20%;
	background-color: #9cd7ff;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	justify-items: center;
	grid-row-gap: 20px;
	grid-column-gap: 50px;
	padding: 20px 0px;
`;

const BigIcon = styled.div`
	border-radius: 50%;
	background-color: #fff;
	width: 100px;
	height: 100px;
	padding: 15px;
`;

const Title = styled.p`
	font-size: 0.8em;
`;

const InternalIcon = styled.img`
	width: 30px;
	height: 30px;
`;

// The finished box page after submitting
class FinishedBox extends React.Component {
	renderIcons = () => {
		return this.props.inBoxTitle.map((title, index) => (
			<Fade timeout={200}>
				<BigIcon key={index}>
					<Title>{title}</Title>
					<InternalIcon src={this.props.inBoxIcon[index]} />
				</BigIcon>
			</Fade>
		));
	};

	render() {
		return (
			<div>
				<PageHead>Come back to center.</PageHead>
				<Containing>
					<InsideCard>{this.renderIcons()}</InsideCard>
				</Containing>
			</div>
		);
	}
}

export default FinishedBox;
