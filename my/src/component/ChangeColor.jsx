import React from 'react'
import { useState } from 'react';


export const ChangeColor = (props) => {
    const { color, setColor } = props
    const handleColorBlue = () => {
        setColor('blue')
    }
    const handleColorGreen = () => {
        setColor('green')
    }
    return (
        <>
            <h1 style={{ color: color }}>{props.string}</h1>
            <button onClick={handleColorBlue}>Set Color Blue</button>
            <button onClick={handleColorGreen}>Set Color Green</button>
        </>

    )
}

export default ChangeColor;