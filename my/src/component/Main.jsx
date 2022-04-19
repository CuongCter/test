import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
const Main = (props) => {
    const location = useLocation()
    const prams = useParams()
    // console.log(location)
    console.log(prams)
    return (
        <div>Main</div>
    )
}

export default Main