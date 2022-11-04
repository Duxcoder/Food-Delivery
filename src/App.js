import styles from './style.module.sass'
import Data from './database';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './components/header/logo/logo';
import Search from './components/header/search/search';
import Navigation from './components/header/navigation/navigation';
import Cart from './components/header/cart/cart';
import ProfileIcon from './components/header/profileIcon/profileIcon';
import Menu from './components/menu/menu'
import Banner from './components/banners/banner';
import EmojiIcons from './components/emojiIcons/emojiIcons';
import Caption from './components/caption/caption';
import Cards from './components/cards/cards';
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
          <Banner url='/img/cake.png' 
                  alt='cake'
                  description = 'All deserts'
                  title = '20% OFF'
                  category = 'Deserty'
                  height = '188px'
                  bgColor = 'blue'
                  >
          </Banner> 
          <Banner url='/img/burger.png' 
                  alt='burger'
                  description = 'Big Burgers'
                  title = '50% OFF'
                  category = 'Foodies'
                  height = '188px'
                  bgColor = 'orange'
                  >     
          </Banner>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Menu icons = {EmojiIcons()} labels = {Data.menu}></Menu>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='d-flex justify-content-start align-items-center'>
            <Caption caption = 'Nearby restaurants'></Caption>
          </Col>
        </Row>
        <Row>
          <Cards url='/img/cardImg/Royal.jpg'></Cards>
        </Row>
      </Container>
    </div>
  );
}

export default App;
