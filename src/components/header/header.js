import React from "react"
import styles from './style.module.sass'
import {Container, Row, Col } from 'react-bootstrap';
import Logo from './logo/logo';
import Search from './search/search';
import NavBar from './navBar/navBar';
import Cart from './cart/cart';
import ProfileIcon from './profileIcon/profileIcon';

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

 function Header () {

  // const checkWidthWindow = () => {
  //   console.log(window.innerWidth)
  //   return window.innerWidth >= 840
  // }
  // const renderSearch = () => {
  //   return (
  //     <Col xs={6} className={styles.searchBlock}>
  //       <Search placeholder='Search'></Search>
  //     </Col>
  //   )
  // }
        return (
    <header>
      <Container>
          <Row className={styles.header}>
            <Col className='d-flex justify-content-start align-items-center '>
              <Row>
                <Col xs={3}>
                  <Logo></Logo>
                </Col>
                <Col xs={6} className={styles.searchBlock}>
                  <Search placeholder='Search'></Search>
                </Col>
              </Row>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
              <NavBar pages={headerPages} separatePage={headerPages[2]}></NavBar>
              <Cart></Cart>
              <ProfileIcon alt={'avatar'} url={'/user/img.png'}></ProfileIcon>
            </Col>
          </Row>
      </Container>
    </header>
        )
 }

 export default Header