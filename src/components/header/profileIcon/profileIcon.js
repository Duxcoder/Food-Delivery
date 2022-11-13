import React from "react";
import styles from './style.module.sass'
import {Link} from 'react-router-dom'

export default function ProfileIcon(props) {
    return (
        <Link to='/login'>
            <div className={styles.profile_wrapper}>
                <img src={props.url} alt={props.alt}/>
            </div>
        </Link>
    )
}