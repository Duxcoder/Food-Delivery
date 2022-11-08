import React from "react";
import styles from './style.module.sass'

export default function NavLinks(props) {

const renderLinks = () => {
    if (props.separatePage) {
        const LinksWithoutSeparatePage = props.pages.filter(item => item !== props.separatePage)
        const separatePage = createLinkLi(styles.page, props.pages.length, props.separatePage.url, props.separatePage.name, true)
        return [...iterationToLinks(LinksWithoutSeparatePage), separatePage]
    } else {
        return iterationToLinks(props.pages)
    }
}

const iterationToLinks = (arrObj, separatePage = false) => {
    return arrObj.map((item, i) => {
        return createLinkLi(styles.page, i, item.url, item.name, separatePage)
    })
}

const createLinkLi = (nameClass, key, href, label, separatePage = false) => {
    return (
        <li key = {key} className={separatePage ? styles.separate : null}>
            <a className = {nameClass} 
               key = {key} 
               href = {href}>
               {label}
            </a>
        </li>
    )
}
    return ( 
        <>
            <ul>
                {renderLinks()}
            </ul>
        </>
    )
}