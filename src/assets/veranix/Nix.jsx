import React from 'react'
import './veranix.css'

import Head from './head/Head.jsx'

import hero from '../img/hero-img.png'


export default function Nix() {
  return (
    <div>
      <Head />
      <section className="hero container">
        <div className="hero-r">
          <h1>Управление запасами <br /> розничного магазина</h1>
          <button className='hero-btn'>Заказать демонстрацию</button>
        </div>
        <img src={hero} alt="" />
      </section>
      <section className='s1'>
        <div className="y-cards container">
          <div className="y-card">
            <div className="head-card">
              <img width={45} src="https://s3-alpha-sig.figma.com/img/67ae/c29f/1013639d0f5d58352a06b04d2b8bef3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LOLqXJ9bnN5Wv~YrgL~J-NuZvULcKGY7Uzb86RIsoZaAFsSrLGNH0CcSIox7CshtDKasZUuS8urUqWhEdssZVKfUb4iqUiKarRmNmWSFWnSCzEPkC6gF6F387fhORsSr2kIrww2vhao1qSstvDyW6hTXPdoSLRIsV1aF0BIS7eOv6R4~Jt~qVGW7kuama3OAl1eNnwl4U1zYjzIOqZ1ceQMzGMaQTtYpwkV9Csivgb2LTqcBtsLTzwab1-47j2q991iA5eEl1j4FXnUFT811vA34mYOOMEkzYlVhwrW~CnuC~02wc6kov8DwcMxvzA19ypW1CUhi7jwxTBOSPBk6YQ__" alt="" />
              <h2>Управление запасами</h2>
            </div>
            <p>Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.</p>
            <button>Подробнее</button>
          </div>
          <div className="y-card">
            <div className="head-card">
              <img width={45} src="https://s3-alpha-sig.figma.com/img/67ae/c29f/1013639d0f5d58352a06b04d2b8bef3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LOLqXJ9bnN5Wv~YrgL~J-NuZvULcKGY7Uzb86RIsoZaAFsSrLGNH0CcSIox7CshtDKasZUuS8urUqWhEdssZVKfUb4iqUiKarRmNmWSFWnSCzEPkC6gF6F387fhORsSr2kIrww2vhao1qSstvDyW6hTXPdoSLRIsV1aF0BIS7eOv6R4~Jt~qVGW7kuama3OAl1eNnwl4U1zYjzIOqZ1ceQMzGMaQTtYpwkV9Csivgb2LTqcBtsLTzwab1-47j2q991iA5eEl1j4FXnUFT811vA34mYOOMEkzYlVhwrW~CnuC~02wc6kov8DwcMxvzA19ypW1CUhi7jwxTBOSPBk6YQ__" alt="" />
              <h2>Управление запасами</h2>
            </div>
            <p>Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.</p>
            <button>Подробнее</button>
          </div>
        </div>
      </section>
    </div>
  )
}
