import './md.css'
import logo1 from '../img/MDdd.png'
import logo2 from '../img/MDss.png'
import logo3 from '../img/MDpp.png'
import logo4 from '../img/Frame 39.png'

function Md() {
  return (
      <div className='md'>
        <div className='container'>
        <div className='mdtepa'>
                <h1 className='bazaznaniy'>База знаний</h1>
               <button className='vsestati'>Все статьи</button>
           </div>
           <div className='chotachunmadim'> 
                <div className='mdbox'>
                    <img src={logo1} alt="" />
                    <div className='boxdown'>
                       <h3 className='mdboxtext'>Методы и формулы расчета торговой наценки</h3><br /><br />
                       <div className='mdboxaota'><a className='mdboxa' href="">Читать статью</a></div>
                    </div>

                </div>
                <div className='mdbox'>
                    <img src={logo2} alt="" />
                    <div className='boxdown'>
                       <h3 className='mdboxtext'>Ассортимент продуктового ассортимента</h3><br /><br />
                       <div className='mdboxaota'><a className='mdboxa' href="">Читать статью</a></div>
                    </div>

                </div>
                <div className='mdbox'>
                    <img src={logo3} alt="" />
                    <div className='boxdown'>
                       <h3 className='mdboxtext'>Что такое сезонность продаж</h3><br /><br />
                       <div className='mdboxaota'><a className='mdboxa' href="">Читать статью</a></div>
                    </div>

                </div>
           </div>
        </div>

           
           <footer className='mdfooter'>
                <div className='mdfootertepa container'>
                      <div className='mdfooterchap'>
                              <img src={logo4} alt="" /><br /><br /><br />
                              <div className='mdmi'>
                                    <div>
                                        <p className='liniya'>Линия консультации</p><br />
                                        <h2 className='telefonnomer'>+7(495)-111-00-10</h2>
                                    </div>
                                    <div>
                                      <p className='liniya'>Наш e-mail</p><br />
                                      <h3 className='telefonnomer'>info@rozn.info</h3>
                                    </div>
                                    <button className='ohirgibtn'>Заказать звонок</button>
                              </div>
                      </div>
                      <div className='mdfooterong'>
                              <div>
                                  <a className='afooter infomd' href="">Информация</a><br /><br /><br />
                                  <a className='afooter' href="">Как это работает</a><br /><br />
                                  <a className='afooter' href="">Инструкции</a><br /><br />
                                  <a className='afooter' href="">Блог</a><br /><br />
                                  <a className='afooter' href="">О нас</a><br /><br />
                              </div>
                              <div>
                                  <a className='afooter infomd' href="">Продукты</a><br /><br /><br />
                                  <a className='afooter' href="">1С-Ритейл Чекер Демо</a><br /><br />
                                  <a className='afooter' href="">1С-Товары.Тестовый для магазина на 1 месяц</a><br /><br />
                                  <a className='afooter' href="">1С-Ритейл Чекер</a><br /><br />
                                  <a className='afooter' href="">1С-Товары 300</a><br /><br />
                                  <a className='afooter' href="">1С-Товары 30000</a><br /><br />
                              </div>
                      </div>
                
                </div>
           </footer>


      </div>
      
      
  )
}

export default Md