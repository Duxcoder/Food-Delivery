import React from "react";
import { Col } from "react-bootstrap";
import styles from './style.module.sass'
import Card from "./card/card";
export default function Cards(props) {
    return (
        <Col className='d-flex flex-wrap'>
            <Card url = {props.url} icons = {props.icons}></Card>
        </Col>
    )
}
