import React from 'react'
import {ReactComponent as Burger} from './icon/burger.svg'
import {ReactComponent as Pizza} from './icon/pizza.svg'
import {ReactComponent as Broccoli} from './icon/broccoli.svg'
import {ReactComponent as Cake} from './icon/cake.svg'
import {ReactComponent as Meat} from './icon/meat.svg'
import {ReactComponent as Sushi} from './icon/sushi.svg'


const EmojiIcons = () => {
    return {
    burger: <Burger></Burger>,
    broccoli: <Broccoli></Broccoli>,
    cake: <Cake></Cake>,
    pizza: <Pizza></Pizza>,
    meat: <Meat></Meat>,
    sushi: <Sushi></Sushi>
    }
}

export default  EmojiIcons

