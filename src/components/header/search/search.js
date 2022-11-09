import React from "react";
import styles from './style.module.sass'
import {FiSearch} from 'react-icons/fi'
export default function Search(props) {
    return (
        <div className={`${styles.search_wrapper} ${props.mobile ? styles.modeSearchMobile : styles.modeSearch}`}>
            <input placeholder={props.placeholder} className={styles.search}></input>
            <FiSearch className={styles.icon_search}></FiSearch>
        </div>
    )
}