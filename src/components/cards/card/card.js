import React from "react";
import styles from './style.module.sass'
import { FiShoppingBag, FiClock } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";


export default function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.url} alt={props.alt}></img>
            <div className={styles.bottom_card}>
                <div className={styles.title_card}>
                    <div className={styles.title}>Royal Sushi House</div>
                    <button><FiShoppingBag className={styles.icon}></FiShoppingBag></button>
                </div>
                <div className={styles.min_price}>
                    <div className={styles.minutes}>
                        <span><FiClock></FiClock>
                            30-40 min
                        </span>
                    </div>
                    <div className={styles.price}>
                        <span><VscCircleFilled></VscCircleFilled>
                            $32 min sum
                        </span>
                    </div>
                </div>
                <span className={styles.menu_item}>
                 {props.icons} Sushi
                </span>
            </div>
        </div>
    )
       
}
