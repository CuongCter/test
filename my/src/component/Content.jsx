import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Content() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    useEffect(async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

        return res.data
    }, [])

    console.log(data)

    return (
        <div>
            {
                data && data.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.id}
                            {item.name}
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Content