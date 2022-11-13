import React, {Component, useState} from "react"
import styles from './style.module.sass'
import {Container, Row, Col } from 'react-bootstrap';
import Logo from './logo/logo';
import Search from './search/search';
import Navigation from './navBar/navigation/navigation'
import Cart from './cart/cart';
import { NavigationMobile } from "./navBar/navigationMobile/navigationMobile";
import ProfileIcon from './profileIcon/profileIcon';
import { ActiveNavigationMobile } from "./navBar/navigationMobile/navigationMobile";

const headerPages = [
    {
      name:'Restaurants',
      url:'/'
    },
    {
      name:'Deals',
      url:'/'
    },
    {
      name:'My orders',
      url:'/'
    }
  ];


 export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      hamburgerNavigation: false
    }
  }

hamburgerClick = () => {
  this.setState(prevState => ({hamburgerNavigation: !prevState.hamburgerNavigation}))
}

  render (){
  return (

    <header>
      <div className={styles.borderBottom}>
      <Container>
          <Row className={styles.header}>
            <Col className='d-flex justify-content-start align-items-center '>
              <Row className={styles.logoSearch}>
                <Col xs={3}>
                  <Logo></Logo>
                </Col>
                <Col xs={9} className={styles.searchBlock}>
                  <Search placeholder='Search'></Search>
                </Col>
              </Row>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
              <Navigation pages={headerPages} separatePage={headerPages[2]}/>
              <Cart></Cart>
              <ProfileIcon alt={'avatar'} url={'/user/img.png'}></ProfileIcon>
              <NavigationMobile
                    separatePage = {headerPages[2]}
                    pages = {headerPages}
                    hamburgerClick = {this.hamburgerClick}
                   />
            </Col>
          </Row>
      </Container>
      </div>
      <Container>
        <Row>
          <Col>
            {this.state.hamburgerNavigation ? <ActiveNavigationMobile separatePage={headerPages[2]} pages={headerPages}></ActiveNavigationMobile> : null}
          </Col>
        </Row>
      </Container>
    </header>
        )}
 }
