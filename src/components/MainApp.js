import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Container, Button } from 'reactstrap';
import styled from '@emotion/styled';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

import AddedToBox from './AddedToBox';
import AddNewPopover from './AddNewPopover';
import FinishedBox from './FinishedBox';

//Icons
import Apple from '../images/apple-2.svg';
import Meeting from '../images/b-meeting.svg';
import BallPlayer from '../images/basketball-player.svg';
import Books from '../images/books.svg';
import Dog from '../images/dog.svg';
import Drop from '../images/drop.svg';
import Energy from '../images/energy.svg';
import Flower from '../images/flower-06.svg';
import Forest from '../images/forest.svg';
import Glass from '../images/glass.svg';
import Guitar from '../images/guitar.svg';
import Headphones from '../images/headphones-2.svg';
import Land from '../images/land.svg';
import Medal from '../images/medal.svg';
import Mic from '../images/mic.svg';
import Microscope from '../images/microscope.svg';
import Movie from '../images/movie.svg';
import Mug from '../images/mug.svg';
import MusicNote from '../images/music-note.svg';
import Palette from '../images/palette.svg';
import Pencil from '../images/pencil.svg';
import Phone from '../images/phone-call.svg';
import Pizza from '../images/pizza-slice.svg';
import Plane from '../images/plane-18.svg';
import PlantVase from '../images/plant-vase.svg';
import PlayMovie from '../images/play-movie.svg';
import Rice from '../images/rice.svg';
import Shopping from '../images/shopping-cart.svg';
import Sport from '../images/sport-mode.svg';
import Steering from '../images/steering-wheel.svg';
import Wave from '../images/water-wave.svg';
import World from '../images/world.svg';
import Meditate from '../images/yoga.svg';
import Yogurt from '../images/yogurt.svg';

const IconArray = [
	Apple,
	Meeting,
	BallPlayer,
	Books,
	Dog,
	Drop,
	Energy,
	Flower,
	Forest,
	Glass,
	Guitar,
	Headphones,
	Land,
	Medal,
	Mic,
	Microscope,
	Movie,
	Mug,
	MusicNote,
	Palette,
	Pencil,
	Phone,
	Pizza,
	Plane,
	PlantVase,
	PlayMovie,
	Rice,
	Shopping,
	Sport,
	Steering,
	Wave,
	World,
	Meditate,
	Yogurt,
];

const MainContain = styled.div`
	text-align: center;
	color: #4a4a4a;
	font-family: 'Dosis';
`;

const TopTitle = styled.h2`
	margin-top: 10vh;
`

// The main "app" screen where users will fill in content in their centerbox
class MainApp extends Component {
	state = {
		mode: 'add', // or share
        inBoxTitle: [],
        inBoxIcon: []
	};

    //Add a new item to the box
	addToBox = (title, icon) => {
		this.setState({
			inBoxTitle: [
				...this.state.inBoxTitle,
				title
            ],
            inBoxIcon: [
                ...this.state.inBoxIcon,
                icon
            ]
		});
	};

	removeFromBox = index => {
		this.setState({
			// Remove the element at the given index.
		});
    };

    toggleMode = () => {
        this.setState({
            mode: 'share'
        })
    }
    
    renderMode = () => {
        if(this.state.mode === 'add'){
            return(
                <Container>
					<TopTitle>What makes you, you?</TopTitle>
					<AddedToBox inBoxTitle={this.state.inBoxTitle} inBoxIcon={this.state.inBoxIcon} iconArray={IconArray} />
					<AddNewPopover addToBox={this.addToBox} iconArray={IconArray} />
					<Button color="primary" onClick={this.toggleMode}>Done</Button>
				</Container>
            )
        }
        return(
            <Container>
                <FinishedBox inBoxTitle={this.state.inBoxTitle} inBoxIcon={this.state.inBoxIcon} iconArray={IconArray}/>
            </Container>
        )
    }

	render() {
		return (
			<MainContain>
				{this.renderMode()}
			</MainContain>
		);
	}
}

export default MainApp;
