import React from 'react';
import {Container} from 'reactstrap';
import styled from '@emotion/styled';

const Text = styled.p`
    margin-top: 100px;
    color: #4a4a4a;
    font-family: 'Dosis', sans-serif;
    text-align: center;
`

const Footer = props => {
    return(
        <Container>
            <Text>A Lytebulb app made by Saalik Lokhandwala © 2019</Text>
        </Container>
    )
}

export default Footer