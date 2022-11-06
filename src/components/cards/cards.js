import React from "react";
import { Col } from "react-bootstrap";
import styles from './style.module.sass'
import Card from "./card/card";
import { EmojiIcons } from "../emojiIcons/emojiIcons";
export default function Cards(props) {
    return (
        <Col className='d-flex flex-wrap justify-content-between'>
            <Card url='/img/cardImg/Royal.jpg' 
                  icons = {EmojiIcons} 
                  time = '30-40 min'
                  price = '$32 min sum'
                  tags = 'Sushi'
            ></Card>
            <Card url='/img/cardImg/Royal.jpg' 
                  icons = {EmojiIcons} 
                  time = '30-40 min'
                  price = '$32 min sum'
                  tags = 'Sushi'
            ></Card>
            <Card url='/img/cardImg/Royal.jpg' 
                  icons = {EmojiIcons} 
                  time = '30-40 min'
                  price = '$32 min sum'
                  tags = 'Sushi'
            ></Card>
            <Card url='/img/cardImg/Royal.jpg' 
                  icons = {EmojiIcons} 
                  time = '30-40 min'
                  price = '$32 min sum'
                  tags = 'Sushi'
            ></Card>
        </Col>
    )
}

