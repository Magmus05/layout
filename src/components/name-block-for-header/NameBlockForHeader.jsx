import React from 'react'
import './NameBlockForHeader.css'
import foto from '@assets/images/foto.svg'
export const NameBlockForHeader = () => {
  return (
    <div className='name-block-for-header'>
        <img className='name-block-for-header__foto' src={foto} alt="фото пользователя" />
        <p className='name-block-for-header__name'>Максим Галактионов</p>
    </div>
  )
}
