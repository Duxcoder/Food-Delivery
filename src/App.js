import './style.sass'
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <Container>
            <Row>
              <Col className='d-flex justify-content-start align-items-center'>
                <div>Logo</div>
                <div>Search</div>
              </Col>
            </Row>
            </Container>
          </Col>
          <Col>
          <Container>
            <Row >
              <Col className='d-flex justify-content-end align-items-center'>
              <div>Logo</div>
              <div>Cart</div>
              <div>Profile</div>
              </Col>
            </Row>
            </Container>
          </Col>
        </Row>
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
