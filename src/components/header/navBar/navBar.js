import React from "react";
import styles from './style.module.sass'
import { Navigation } from "./navigation/navigation";
import { NavigationMobile } from "./navigationMobile/navigationMobile";
export default function NavBar(props) {

 
    return ( 
        <>
        <Navigation separatePage = {props.separatePage}
                    pages = {props.pages}/>
        <NavigationMobile
                    separatePage = {props.separatePage}
                    pages = {props.pages}
                    hamburgerClick = {props.hamburgerClick}
                   />
        </>
    )
}