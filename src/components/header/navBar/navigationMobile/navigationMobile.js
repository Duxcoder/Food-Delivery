import  React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5'
import styles from '../style.module.sass'
import NavLinks from '../navLinks';
export const NavigationMobile = (props) => {
    const [open, setOpen] = useState(false)
    const hamurger = <IoMenu className={styles.hamburgerIcon}/> 
    const close = <IoClose className={styles.hamburgerIcon}/>   
    return (
        <nav className={styles.navigationMobile}>
            <div className={styles.hamburgerWrapper}
                 onClick={() => setOpen(!open)}>
            {open ? close : hamurger}
            </div>
            {open && <NavLinks separatePage = {props.separatePage}
                      pages = {props.pages}/>}
        </nav>
    );
};
