import React from 'react'
import logo from '../../img/Frame 39.png'
import './head.css'

export default function Head() {
  return (
    <div>
        <header className='container'>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><a href="#">Как это работает</a></li>
                    <li><a href="#">Инструкции</a></li>
                    <li><a href="#">Продукты</a></li>
                    <li><a href="#">База знаний </a></li>
                    <li><a href="#">О нас</a></li>
                    <li><button>Вход</button></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
