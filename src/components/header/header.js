import React from "react"
import styles from './style.module.sass'
import {Container, Row, Col } from 'react-bootstrap';
import Logo from './logo/logo';
import Search from './search/search';
import Navigation from './navigation/navigation';
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
        return (
    <header>
      <Container>
          <Row className={styles.header}>
            <Col className='d-flex justify-content-start align-items-center'>
              <Row>
                <Col><Logo></Logo></Col>
                <Col className={styles.searchBlock}><Search placeholder='Search'></Search></Col>
              </Row>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
              <Navigation pages={headerPages} separatePage={headerPages[2]}></Navigation>
              <Cart></Cart>
              <ProfileIcon alt={'avatar'} url={'/user/img.png'}></ProfileIcon>
            </Col>
          </Row>
      </Container>
    </header>
        )
 }

 export default Header