import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]
    console.log(classes)

    
    return(
        <button
            onClick = {props.onClick}
            className = {cls.join(' ')} // Джоиним классы из массива B)
            disabled = {props.disabled}
        >


            {props.children}
        </button>
    )
}

export default Button