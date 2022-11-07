import styles from './style.module.sass'
import Data from './database';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header/header'
import Menu from './components/menu/menu'
import Banner from './components/banners/banner';
import {EmojiIcons} from './components/emojiIcons/emojiIcons';
import Caption from './components/caption/caption';
import Cards from './components/cards/cards';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Row className='d-flex justify-content-between align-items-center'>
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
        </Row>
      </Container>
      <Container>
        <Row>
          <Menu icons = {EmojiIcons} labels = {Data.menu}></Menu>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='d-flex justify-content-start align-items-center'>
            <Caption caption = 'Nearby restaurants'></Caption>
          </Col>
        </Row>
        
          <Cards></Cards>
        
      </Container>
    </div>
  );
}

export default App;
