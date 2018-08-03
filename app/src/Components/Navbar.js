import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, List, Image, Segment, Container, Header, Menu, Grid } from 'semantic-ui-react';

import '../style.css';

class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render(){

        const { activeItem } = this.state

        return(

                <Menu borderless inverted>
                    <Container>
                    <Menu.Item
                        name='Logo'
                        active={activeItem === 'editorials'}
                        onClick={this.handleItemClick}
                    >
                        <h2>Kālai Pōhaku</h2>
                    </Menu.Item>


                    <Menu.Menu position = 'right'>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >
                            <h4>About</h4>
                        </Menu.Item>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >
                            <h4>Profiles</h4>
                        </Menu.Item>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >
                            <h4>Contact</h4>
                        </Menu.Item>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >
                            <h4>Engineering Resources</h4>
                        </Menu.Item>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >
                            <h4>Pathways</h4>
                        </Menu.Item>

                    </Menu.Menu>
                    </Container>
                </Menu>

        );
    }
}

export default Navbar;



