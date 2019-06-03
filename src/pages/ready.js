import React from 'react';
import { navigate } from 'gatsby';
import { Container, Fade } from 'reactstrap';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const ThePulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(156,215,255, 0.3);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(156,215,255, 0);
  }
`;

const PulseRipple = styled.div`
	height: 40px;
	width: 40px;
	border: 1px solid #9cd7ff;
	border-radius: 50%;
	animation: ${ThePulse} 1.5s ease infinite;
	margin: 50px auto;
	cursor: pointer;
`;

const MainContain = styled.div`
	font-family: 'Dosis';
	text-align: center;
	padding: 50px;
`;

class ReadyPage extends React.Component {
	goToApp = () => {
		navigate('/app');
	};

	render() {
		return (
			<Fade timeout={250}>
				<MainContain>
					<Container>
						<h3>Are you ready to build a centerbox?</h3>
						<p>Before you get started, wait a sec.</p>
						<p>
							Think about things that make you, you. They can be big or small,
							it's up to you.
						</p>
						<p>
							Close your eyes and give it a good thought. Click that little
							pulsing circle once you're ready.
						</p>
						<PulseRipple onClick={this.goToApp} />
					</Container>
				</MainContain>
			</Fade>
		);
	}
}

export default ReadyPage;
