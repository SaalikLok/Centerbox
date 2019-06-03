import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Container, Button, Fade } from 'reactstrap';
import styled from '@emotion/styled';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const MainContain = styled.div`
	text-align: center;
	color: #4a4a4a;
	font-family: 'Dosis';
	display: grid;
	grid-template-columns: repeat(3, minmax(20px, 1fr));
	row-gap: 20px;
	justify-content: center;
	margin: 50px 0px;
`;

const IconInside = styled.img`
	padding: 10px;
`;

const IconCircle = styled.div`
	border-radius: 50%;
	background-color: #9cd7ff;
	width: 60px;
	height: 60px;
	margin: 0 auto;
`;

const Title = styled.p``;

// Component that shows which items are inside the box as they are actively being added
class AddedToBox extends Component {
	state = {
		view: 'add', // or share
	};

	render() {
		return (
			<MainContain>
				{this.props.inBoxTitle.map((item, index) => (
					<Fade timeout={200}>
						<div key={index}>
							<Title>{item}</Title>
							<IconCircle>
								<IconInside src={this.props.inBoxIcon[index]} />
							</IconCircle>
						</div>
					</Fade>
				))}
			</MainContain>
		);
	}
}

export default AddedToBox;
