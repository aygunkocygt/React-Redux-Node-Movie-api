import React, {Component} from 'react';
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {NavLink} from "react-router-dom";
import {Container,Image,Menu,Visibility,} from 'semantic-ui-react';


class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };
    stickTopMenu = () => this.setState({ menuFixed: true });

    unStickTopMenu = () => this.setState({ menuFixed: null });

    render() {
        const { menuFixed } = this.state ;
        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}




                    >
                        <Container text>
                            <div className="ui secondary pointing menu">

                                <Menu.Item>
                                    <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                                </Menu.Item>
                                    <Menu.Item as={NavLink} to="/" exact={true}>Movie App</Menu.Item>
                                    <Menu.Item as={NavLink} to="/movies" exact>Movies</Menu.Item>
                                    <Menu.Item as={NavLink} to="/movies/new" >Add Movies</Menu.Item>

                            </div>
                        </Container>
                    </Menu>

                </Visibility>


            </div>
        );
    }
}



export default Header;
