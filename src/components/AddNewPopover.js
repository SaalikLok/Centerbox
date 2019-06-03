import React, { Component } from 'react';
import { navigate } from 'gatsby';
import {
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	Input,
} from 'reactstrap';
import styled from '@emotion/styled';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const MainContain = styled.div`
	text-align: center;
	color: #4a4a4a;
	font-family: 'Dosis';
`;

const FootContainer = styled.div`
	width: 100%;
	text-align: center;
	color: #4a4a4a;
	font-family: 'Dosis';
	display: grid;
	grid-template-columns: 80px 80px;
	justify-content: center;
`;

const ScrollablePop = styled.div`
	width: 100%;
	overflow: auto;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(5, 1fr);
	justify-content: center;
`;

const SelectIcon = styled.img`
	width: 60%;
	height: auto;
	margin: 8px;
	cursor: pointer;
	background-color: ${props => props.selected ? '#9cd7ff' : ''};
	border-radius: ${props => props.selected ? '20%' : '0%'};

	&:hover {
		opacity: 0.7;
		color: #9cd7ff;
		border-radius: 5px;
	}
`;

class AddNewPopover extends Component {
	state = {
		isOpen: false,
		isCompleted: false,
		selectedIcon: 0,
		enteredText: '',
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	selectIcon = index => {
		this.setState({
			selectedIcon: index,
		});
	};

	enterText = event => {
		this.setState({
			enteredText: event.target.value,
		});
	};

	submitPop = () => {
		this.props.addToBox(
			this.state.enteredText,
			this.props.iconArray[this.state.selectedIcon]
		);
		this.toggle();
		this.setState({
			selectIcon: 0,
			enteredText: '',
		});	
	};

	render() {
		return (
			<MainContain>
				<Button onClick={this.toggle} id="AddPopover" color="primary">
					Add New
				</Button>
				<Modal
					size="sm"
					target="AddPopover"
					toggle={this.toggle}
					isOpen={this.state.isOpen}
				>
					<ModalHeader>What makes you, you?</ModalHeader>
					<ModalBody>
						<MainContain>
							<Input
								placeholder="type here"
								type="text"
								onChange={this.enterText}
								value={this.state.enteredText}
								bsSize="lg"
								maxLength={20}
							/>
							<ScrollablePop>
								{this.props.iconArray.map((icon, index) => {
									if (this.state.selectedIcon === index) {
										return (
											<SelectIcon
												selected
												src={icon}
												key={index}
												onClick={() => this.selectIcon(index)}
											/>
										);
									}
									return (
										<SelectIcon
											src={icon}
											key={index}
											onClick={() => this.selectIcon(index)}
										/>
									);
								})}
							</ScrollablePop>
						</MainContain>
					</ModalBody>
					<ModalFooter>
						<FootContainer>
							<Button color="primary" onClick={this.submitPop}>
								Add
							</Button>
							<Button color="secondary" onClick={this.toggle}>
								Cancel
							</Button>
						</FootContainer>
					</ModalFooter>
				</Modal>
			</MainContain>
		);
	}
}

export default AddNewPopover;
