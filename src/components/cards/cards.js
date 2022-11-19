import React from "react";
import { Col, Row} from "react-bootstrap";
import styles from './style.module.sass'
import Card from "./card/card";
import Data from "../../database";
import { EmojiIcons } from "../emojiIcons/emojiIcons";
export default function Cards(props) {
      const renderCard = (data) => {
            return data.cards.map(item => {
                  const {title, url, category, time, price, id} = item;
                        return <Card title = {title}
                                    url={url}
                                    icons = {category} 
                                    time = {time}
                                    price = {price}
                                    tags = {category}
                                    key = {id}
                               ></Card>
            })
      }
    return (
        <Row className ='d-flex flex-wrap justify-content-between'>
            {renderCard(Data)}
            {/* <Card title = 'Royal Sushi House'
                  url='/img/cardImg/Royal.jpg' 
                  icons = {EmojiIcons} 
                  time = '30-40 min'
                  price = '$32 min sum'
                  tags = 'Sushi'
            ></Card>
            <Card title = 'Burgers & Pizza'
                  url='/img/cardImg/burgers&pizza.jpg' 
                  icons = {EmojiIcons} 
                  time = '40-60 min'
                  price = '$24 min sum'
                  tags = 'Sushi'
            ></Card>
            <Card title = 'Ninja sushi'
                  url='/img/cardImg/NinjaSushi.jpg' 
                  icons = {EmojiIcons} 
                  time = '20-40 min'
                  price = '$40 min sum'
                  tags = 'Sushi'
            ></Card>
            <Card 
                  title = 'Sushi master'
                  url='/img/cardImg/SushiMaster.jpg' 
                  icons = {EmojiIcons} 
                  time = '60-70 min'
                  price = '$49 min sum'
                  tags = 'Sushi'
            ></Card> */}
        </Row>
    )
}

