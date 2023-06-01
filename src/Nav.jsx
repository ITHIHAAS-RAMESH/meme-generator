import React from 'react'
import './Nav.css'

export default function Nav(){
    return(
        <>
        <div className='nav flex text-lg md:text-2xl'>
            <img src='/images/trollface.png' alt='logo'/>
            <h1>Meme Generator</h1>
            <h3 className='text-sm'>React Course - Project 3</h3>
        </div>
        </>
    )
}