import React from "react";
import styles from './style.module.sass'

export default function ProfileIcon(props) {
    return (
        <div className={styles.profile_wrapper}>
            <img src={props.url} alt={props.alt}/>
        </div>
    )
}