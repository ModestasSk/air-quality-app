import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/style.css';
import background3 from '../public/assets/background3.png';
import background5 from '../public/assets/background5.png';

import {
    Container, Row, Col
} from 'reactstrap';

export default class Additional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            cities: [],
        }
    }

    componentDidMount() {
        fetch('http://api.airvisual.com/v2/states?country=' + this.props.country + '&key=LdTsKf5zgrF7qQ4Mb')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    cities: json.data,
                })
            });
    }

    render() {
        let cityCards = this.state.cities.map(person => {
            return (
                <Button key={person.state} className="button" variant="contained" size="large" color="primary" align="center" style={{ color: "white", backgroundColor: "black" }} onClick={() => this.props.handleClick(person.state, this.props.country)}>{person.state}</Button>
            )
        })
        var { isLoaded, cities } = this.state;
        return (
            <section className="backgroundstatic" style={{ backgroundImage: `url(${background3})` }}>
                <Typography className="headerBottom" variant="title" color="inherit" align="center"> Other cities</Typography>
                <Container align="center">
                    <Row className="justify-content-md-center">
                        <Col xs>
                            {cityCards}
                        </Col>
                    </Row>
                </Container>
                <Typography className="headerBottomChange" variant="title" color="inherit" align="center">
                    Not happy about the number? There's something you can do!
                </Typography>
                <Typography className="headerBottomText" variant="title" color="inherit" align="center">
                    Be the part of the movement and join the #trashtag challange to protect our earth.
                </Typography>
                <Typography className="backgroundTrash" variant="title" color="inherit" align="center" style={{ backgroundImage: `url('${background5}')` }}>
                </Typography>
                <Typography className="credit" variant="title" color="inherit" align="center">
                    Modestas Skinderis, 2019
                </Typography>
            </section>
        );
    }



}