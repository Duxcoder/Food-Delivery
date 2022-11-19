import React from "react";
import styles from './style.module.sass'
import { FiShoppingBag, FiClock } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import { Col } from "react-bootstrap";
import { EmojiIcons } from "../../emojiIcons/emojiIcons";


export default function Card(props) {
    const renderTags = (icons) => {
        return icons.map(item => {
            return <span className={styles.menu_item}>
                    {EmojiIcons[item.toLowerCase()]} {item}
                   </span>
        })
    }

    return (
    <Col xl={3} lg={4} sm={6} className="justify-content-center d-flex"> 
        <div className={styles.card}>
            <img src={props.url} alt={props.alt}/>
            <div className={styles.featured}>FEATURED</div>
            <div className={styles.bottom_card}>
                <div className={styles.title_card}>
                    <div className={styles.title}>{props.title}</div>
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
                    {renderTags(props.icons)}
           </div>
        </div>
    </Col>
    )
       
}
