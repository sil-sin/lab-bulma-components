import 'bulma/css/bulma.css';
import React from 'react'
import './CoolButton.css'


const CoolButton = (props) => {
    let size = props.isSmall ? 'is-small' : ''
    let danger = props.isDanger ? 'is-danger' : ''
    let success = props.isSuccess ? 'is-success' : ''
    let className = `button ${props.className} ${size} ${danger} ${success} `


    return <button className={className}>{props.children}</button>



}

export default CoolButton