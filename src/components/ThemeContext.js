import React, { useContext } from 'react'
import { managetheme } from '../App'

export default function ThemeContext() {

    const { theme, changetheme } = useContext(managetheme)
    return (
        <>
            <div className='container'>
                <button className='btn btn-dark mx-1' onClick={() => changetheme("black")}>Black</button>
                <button className='btn btn-danger mx-1' onClick={() => changetheme("red")}>Red</button>
                <button className='btn btn-primary mx-1' onClick={() => changetheme("blue")}>Blue</button>
                <button className='btn btn-warning' onClick={() => changetheme("yellow")}>Yellow</button>
            </div>

        </>
    )
}
