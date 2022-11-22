import React, {useState} from "react";
import styles from './style.module.sass'
import { FiShoppingBag } from "react-icons/fi";
export default function Cart(props) {
    const [open, setOpen] = useState(false);
    const openPopUp = () => {
        setOpen(!open);
    }
    const renderPopUp = (data) => {
        return data.map(item => {
                  const { title, url, category, time, price, id } = item;
                  return <div> {title}</div>
            })
    }
    return (<>
         <div className={styles.btn_wrapper} onClick={() => {openPopUp()}}> 
             <div className={styles.cart_counter}>{props.counter.length}</div>
            <FiShoppingBag className={styles.icon}></FiShoppingBag>
        </div>
        <div className={styles.popUp_wrapper}>
        {open ? renderPopUp(props.counter) : null}
        </div>
        </>
    )
}