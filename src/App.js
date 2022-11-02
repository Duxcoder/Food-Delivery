import styles from './style.module.sass'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from './components/header/logo/logo';
import Search from './components/header/search/search';
import Navigation from './components/header/navigation/navigation';
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
      <Container fluid>
        <Row className={styles.header}>
          {/* <Col>
            <Row> */}
            
            
              <Col className='d-flex justify-content-start align-items-center'>
                <Logo></Logo>
                <Search placeholder='Search'></Search>
              </Col>
            
            
            {/* </Row>
          </Col> */}
          {/* <Col> */}
            {/* <Row > */}
              <Col className='d-flex justify-content-end align-items-center'>
              <Navigation pages={headerPages} separatePage={headerPages[2]}></Navigation>
              <div>Cart</div>
              <div>Profile</div>
              </Col>
            {/* </Row> */}
          {/* </Col> */}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='d-flex justify-content-between align-items-center'>
          <div>Banner 1</div>
          <div>Banner 2</div>
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
