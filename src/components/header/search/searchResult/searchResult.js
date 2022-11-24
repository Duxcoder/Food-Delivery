import React, { useState, useEffect } from "react";
import styles from './style.module.sass'
import Data from "../../../../database";
export default function SearchResult(props) {
    const [elements, setElements] = useState([])
    useEffect(() => {
       setElements(searching(props.text));
    }, [props.text])

    const searching = (text) => {
        return Data.cards.map(item => {
            if (text) {
                return item.title.toLowerCase().includes(text.toLowerCase()) ? item : console.log()
            }
        }).filter(item => item !== undefined)
    }

    const renderResult = () => {
        console.log(elements)
        if (elements.length) {
            return elements.map(item => {
                return <a href="/">{item.title}</a>
           })
        }
         
    }


    return (<>
    {elements.length ? <div className={styles.result_wrapper}>{renderResult()}</div> : null}
    </>
    )
}