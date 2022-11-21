import React, {useState} from "react";
import styles from './style.module.sass'
import { FiShoppingBag, FiClock } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import { Col } from "react-bootstrap";
import { EmojiIcons } from "../../emojiIcons/emojiIcons";
import Data from "../../../database";


export default function Card(props) {
    let [cart, setToCart] = useState(false)
    const renderTags = (icons) => {
        return icons.map((item, i) => {
            let icon
            Data.menu.forEach(elem => {
                if (elem.name === item) {
                    icon = elem.icon.toLowerCase()
                }
            })
            return <span className={styles.menu_item} key={i}>
                {EmojiIcons[icon]} {item}
            </span>
        })
    }

    return (
        <Col lg={4} sm={6} className="justify-content-center d-flex">
            <div className={styles.card}>
                <img src={props.url} alt={props.alt} />
                <div className={styles.featured}>FEATURED</div>
                <div className={styles.bottom_card}>
                    <div className={styles.title_card}>
                        <div className={styles.title}>{props.title}</div>
                        <button onClick={() => setToCart(!cart)}>
                            <FiShoppingBag className={`${styles.iconBag} ${styles.active}`}></FiShoppingBag>
                            <div className={styles.counter}>{cart.toString()}</div>
                        </button>
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
