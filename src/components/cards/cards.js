import React from "react";
import { Row } from "react-bootstrap";
import styles from './style.module.sass'
import Card from "./card/card";
import Data from "../../database";
export default function Cards(props) {
      const dataWithFilter = () => {
            let arrFilterCategory = []
            if (Object.keys(props.filter).length) {
                  for (let key in props.filter) {
                        arrFilterCategory.push(props.filter[key].name);
                  }
            }
            let data = []
            Data.cards.forEach(elem => {
                  if (elem.category.sort().join().toLocaleLowerCase().includes(arrFilterCategory.sort().join().toLocaleLowerCase())) {
                        data.push(elem)
                  }
            })
            return arrFilterCategory.length ? data : Data.cards
      }
      dataWithFilter()
      const renderCard = (data) => {
            return data.map(item => {
                  const { title, url, category, time, price, id } = item;
                  return <Card title={title}
                        shop={item}
                        url={url}
                        icons={category}
                        time={time}
                        price={price}
                        tags={category}
                        key={id}
                        cart={props.cart}
                        addToCart={props.addToCart}
                  ></Card>
            })
      }
      return (
            <Row className='d-flex flex-wrap justify-content-start'>
                  {renderCard(dataWithFilter())}
            </Row>
      )
}

