import React from "react";
import { Col } from "react-bootstrap";
import styles from './style.module.sass'

export default function Menu(props) {

    const renderItem = (icons, arrItemsMenu) => {
        return arrItemsMenu.map(elem => {
            return (
                <button className={styles.item} key={elem.id}> 
                    {icons[elem.target]} 
                    <span>{elem.name}</span>
                </button>
            )
        });
    }
    return (
        <Col className='d-flex justify-content-between align-items-center' id = {styles.mg}>
           {renderItem(props.icons, props.labels)}
          </Col>
    )
}


