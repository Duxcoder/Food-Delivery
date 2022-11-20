import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import styles from './style.module.sass'

export default function Menu(props) {

    const [clicked, setActive] = useState({
        activeObject: {},
        objects: props.labels
    });
    const toggleActive = (index) => {
        if (Object.keys(clicked.activeObject).includes(index.toString())) {
            let newObj = {}
            for (let key in clicked.activeObject) {
                if (key !== index.toString()) {
                    newObj[key] = clicked.activeObject[key]
                }
            }
            setActive({ ...clicked, activeObject: { ...newObj } })
        } else {
            setActive({ ...clicked, activeObject: { ...clicked.activeObject, [index]: clicked.objects[index] } })
        }
    }
    const toggleStyles = (index) => {
        return clicked.activeObject[index] === clicked.objects[index] ? styles.item_active : styles.item
    }
    
    const renderItem = (icons, arrItemsMenu) => {
        return arrItemsMenu.map((elem, index) => {
            return (
                <button onClick={() => toggleActive(index)} className={toggleStyles(index)} key={elem.id}>
                    {icons[elem.target]}
                    <span>{elem.name}</span>
                </button>
            )
        });
    }
    useEffect(() => {
        props.filter(clicked.activeObject)
    })
    return (
        <Col className='d-flex justify-content-between align-items-center' id={styles.mg}>
            {renderItem(props.icons, props.labels)}
        </Col>
    )
}


