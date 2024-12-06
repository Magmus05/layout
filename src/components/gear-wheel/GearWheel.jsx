import React from 'react'
import gear from '@assets/images/gear.svg'
import './GearWheel.css'
export const GearWheel = () => {
  return (
    <div className='gear-wheel'>
        <img className='gear-wheel__image' src={gear} alt="картинка настройки" />
    </div>
  )
}
