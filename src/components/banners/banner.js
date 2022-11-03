import React from "react";
import styles from './style.module.sass'
import { Row, Col } from "react-bootstrap";


export default function Banner(props) {
    return (
<Row className={styles.banner_wrapper}>
        <Col>
            <img src={props.url} alt={props.alt}></img>
        </Col>  
        <Col>{props.description}
             {props.title}
             {props.category}
        </Col>
    </Row>

    )
}