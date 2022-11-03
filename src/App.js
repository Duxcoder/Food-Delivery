import styles from './style.module.sass'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from './components/header/logo/logo';
import Search from './components/header/search/search';
import Navigation from './components/header/navigation/navigation';
import Cart from './components/header/cart/cart';
import ProfileIcon from './components/header/profileIcon/profileIcon';
import Banner from './components/banners/banner';
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

function App() {
  return (
    <div className="App">
      <header>
      <Container>
        <Row className={styles.header}>
          <Col className='d-flex justify-content-start align-items-center'>
            <Row>
              <Col><Logo></Logo></Col>
              <Col><Search placeholder='Search'></Search></Col>
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
      <Container>
        <Row>
          <Col className='d-flex justify-content-between align-items-center g-4'>
          <Banner url='/img/burger.png' 
                  alt='burger'
                  description = 'Big Burgers'
                  title = '50% OFF'
                  category = 'Foodies'
                  ></Banner>
          <Banner></Banner>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='d-flex justify-content-between align-items-center'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='d-flex justify-content-start align-items-center'>Title block</Col>
        </Row>
        <Row>
          <Col className='d-flex flex-wrap'>
            <div>menu block item 1</div>
            <div>menu block item 2</div>
            <div>menu block item 3</div>
            <div>menu block item 4</div>
            <div>menu block item 5</div>
            <div>menu block item 6</div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
