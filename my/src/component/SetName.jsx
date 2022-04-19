import React from 'react'


export const SetName = (props) => {
    const { name, setName } = props
    const handleName = () => {
        setName('HIT-CLUB')
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleName} >Set Name </button>
        </div>

    )
}
export default SetName;