import React from "react";
import styles from './style.module.sass'
import { Row, Col } from "react-bootstrap";


export default function Banner(props) {
    return (
<Row className={styles.banner_wrapper} id = {props.bgColor === 'blue' ? styles.bgColorBlue : styles.bgColorOrange}>
        <Col>
            <img src={props.url} alt={props.alt} ></img>
        </Col>  
        <Col><div className={styles.descr}>{props.description}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.category}>{props.category}</div>
        </Col>
    </Row>

    )
}