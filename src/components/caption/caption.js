import React from "react";
import styles from './style.module.sass'

export default function Caption(props) {
    return <div className={styles.caption}>{props.caption}</div>
       
}
