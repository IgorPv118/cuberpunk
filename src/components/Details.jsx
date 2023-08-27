import React from 'react'
import "../styles/Details.css"
import Button from './Button'

const Details = () => {
  return (
    <div className='square-wrapper'>
        <div className='square'>
            <p className='square-text'>Доступно на всех платформах</p>
            <Button/>
        </div>
    </div>
  )
}

export default Details