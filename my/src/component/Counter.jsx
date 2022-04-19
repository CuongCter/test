import React from 'react'

export const Counter = (props) => {
    const { counter, setCounter } = props
    const handlenIncrease = () => {
        setCounter(counter + 1)
        // setCounter(prevState => prevState + 1)
        // setCounter(prevState => prevState + 1)
        // setCounter(prevState => prevState + 1)
    }
    const unIncrease = () => {
        setCounter(counter - 1)
    }
    const random = () => {
        setCounter(Math.floor(Math.random(counter) * 50))
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handlenIncrease}>Increase</button>
            <button onClick={unIncrease}>Reduced</button>
            <button onClick={random}>Ramdom</button>
        </div>

    )
}
export default Counter