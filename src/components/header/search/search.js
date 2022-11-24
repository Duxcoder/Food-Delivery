import React, {useState, useEffect} from "react";
import styles from './style.module.sass'
import {FiSearch} from 'react-icons/fi'
import SearchResult from "./searchResult/searchResult";
export default function Search(props) {
    const [click, setClick] = useState(false)
    const [searchText, setSearchText] = useState('')

    const focusSearch = () => setClick(true)
    useEffect(() => {
        const closeDrop = e => {
            if (e.path[0].tagName !== 'INPUT'){
                setClick(false)
            }
            
        }
         document.body.addEventListener('click', closeDrop)
         
        return () => {
            document.body.removeEventListener('click', closeDrop)
        }
    }, [])
    return (<>
        <div className={`${styles.search_wrapper} ${props.mobile ? styles.modeSearchMobile : click ? styles.modeSearchActive : styles.modeSearch }`}>
            <input placeholder={props.placeholder} 
                   className={styles.search} 
                   onChange={(item) => setSearchText(item.target.value)} 
                   onFocus={() => focusSearch()}>
            </input>
            <FiSearch className={styles.icon_search}></FiSearch>
        {click ? <SearchResult text = {searchText}/> : null}

        </div>
        </>
    )
}
