import React from 'react';
import styles from '../style.module.sass'
import NavLinks from '../navLinks';
const Navigation = (props) => {
    return (
        <nav className={styles.navigation}>
            <NavLinks separatePage = {props.separatePage}
                      pages = {props.pages}
                      classLink = {'page'}/>
        </nav>
    );
};

export default Navigation