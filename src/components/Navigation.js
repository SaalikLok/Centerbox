import React from 'react';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import { Link } from 'gatsby';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import styled from '@emotion/styled';

const ContainDiv = styled.div`
    font-family: 'Dosis';
`;

const ItemLink = styled.div`
    margin: 10px 20px;
    color: #4a4a4a;
`
// Navbar for the landing page portion
class Navigation extends React.Component {
	state = {
		isOpen: false,
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<ContainDiv>
				<Container>
					<Navbar light expand="md">
						<NavbarBrand href="/">Centerbox</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Link to="/story"><ItemLink>Story</ItemLink></Link>
								</NavItem>
								<NavItem>
									<Link to="/app"><ItemLink>Start</ItemLink></Link>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Container>
			</ContainDiv>
		);
	}
}

export default Navigation;
