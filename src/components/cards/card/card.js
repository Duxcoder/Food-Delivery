import React from "react";
import styles from './style.module.sass'
import { FiShoppingBag, FiClock } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";


export default function Card(props) {
    return (
        <div className={styles.card}>
            
            <img src={props.url} alt={props.alt}/>
            <div className={styles.featured}>FEATURED</div>
            <div className={styles.bottom_card}>
                <div className={styles.title_card}>
                    <div className={styles.title}>Royal Sushi House</div>
                    <button><FiShoppingBag className={styles.icon}></FiShoppingBag></button>
                </div>
                <div className={styles.min_price}>
                    <div className={styles.minutes}>
                        <span>
                            <FiClock className={styles.iconTimes}></FiClock>
                            {props.time}
                        </span>
                    </div>
                    <div className={styles.price}>
                        <span>
                            <VscCircleFilled className={styles.iconPoint}></VscCircleFilled>
                            {props.time}
                        </span>
                    </div>
                </div>
                <span className={styles.menu_item}>
                    {props.icons.sushi} {props.tags}
                </span>
            </div>
        </div>
    )
       
}
