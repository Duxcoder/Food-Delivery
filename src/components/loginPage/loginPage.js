import React from "react";
import styles from './style.module.sass'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../header/logo/logo";
import horizontalImg from "./img/horizontal.svg"
import squaredImg from "./img/squared.svg"
import reviewsImg from "./img/reviews.svg"


function LoginPage(){
const handleChange = () => {

}
return (
<div className={styles.login_page}>
<Container fluid>
    <Container>
        <Row>
            <Col xs={{size:3, offset:1}} className={styles.left_block}>
                <header >
                    <Logo></Logo>
                </header>
                <main className="d-flex flex-column justify-content-end" >
                    <div>
                    <h1>Login</h1>
                    <p>Sign in with your data that you entered during your registration.</p>
                    <label>Email</label>
                    <input placeholder="name@example.com">
                    </input>
                    <label>Password</label>
                    <input placeholder="min. 8 characters">
                    </input>
                    <div className={styles.check_logged}>
                        <input className={styles.checkbox} type="checkbox" defaultChecked={false} onChange={handleChange} />
                        <label>Keep me logged in</label>
                    </div>
                    <div className={styles.login_bottom}>
                        <button>Login</button>
                        <a href="/">Forgot password</a>
                    </div>
                    </div>
                </main>
                
            </Col>
            <Col xs={1}></Col>
            <Col xs={7} className={styles.right_block}>
                {/* <div className={styles.bg}> */}
                <div className={styles.imgs}>
                    <img className={styles.revi} src={reviewsImg} alt='reviews' />
                    <img className={styles.hori} src={horizontalImg} alt='horizontal' />
                    <img className={styles.squa} src={squaredImg} alt='squared' />
                </div>
                <div className={styles.description_block}>
                    <h2>Leave reviews for all meals</h2>
                    <span>Lorem ipsum dolor sit amet, magna scaevola his ei. 
                        Cum te paulo probatus molestiae, eirmod assentior 
                        eum ne, et omnis antiopam mel.
                    </span>
                </div>  
                {/* </div>   */}

            </Col>
        </Row>
    </Container>
</Container>
</div>
)
}

export default LoginPage