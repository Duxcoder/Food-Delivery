import  React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5'
import styles from '../style.module.sass'
import NavLinks from '../navLinks';
export const NavigationMobile = (props) => {
    const [open, setOpen] = useState(false)
    const hamurger = <IoMenu className={styles.hamburgerIcon}/> 
    const close = <IoClose className={styles.hamburgerIcon}/>   
    const sendToHeader = () => {
        return (
            <div className={styles.navMobileWrapper}>
                <NavLinks mobile separatePage = {props.separatePage}
                          pages = {props.pages}
                          classLink = {'page_link_mobile'}
                          /></div>
        )
    }
    return (
        <nav className={styles.navigationMobile}>
            <div className={styles.hamburgerWrapper}
                 onClick={() => setOpen(!open)}>
            {open ? close : hamurger}
            </div>
            {open && sendToHeader()}
        </nav>
    );
};
