import React from "react";
import styles from './style.module.sass'
import { FiShoppingBag } from "react-icons/fi";

export default function Cart(props) {
    return (
         <div className={styles.btn_wrapper}> 
             <div className={styles.cart_counter}>4</div>
            <FiShoppingBag className={styles.icon}></FiShoppingBag>
        </div>
       
    )
}