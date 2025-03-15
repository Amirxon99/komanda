import './umarbek.css'

function info() {
  return (
    <div className='container'>
      <div className="green-box">
        <div className="green-info">
          <h3>Хотите бесплатную консультацию?
            Оставляйте заявку</h3>
          <p>Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время </p>
        </div>
        <div className="green-input">
          <input type="text" placeholder="Ваше имя" /> <br />
          <input type="text" placeholder="Ваш телефон" /> <br />
          <input type="text" placeholder="Ваш e-mail" /> <br />
          <div className="green-childs">
            <p>Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности</p>
            <button>Отправить</button>
          </div>
        </div>
      </div>
      <h1>Ответы на вопросы</h1>
      <div className="answers">
        <select id="">
          <option value="">С чего начать работу с 1С-Товары?</option>
          
        </select> <br />
        <select id="">
          <option value="">Как подключить 1С-Ритейл Чекер* и 1С-Товары?</option>
          
        </select> <br />
        <select id="">
          <option value="">Средний чек, о чем нам может рассказать?</option>
          
        </select> <br />
        <select id="">
          <option value="">Сценарии автозаказа сервиса 1С-Товары</option>
          
        </select> <br />
        <select id="">
          <option value="">Как подключить 1С-Ритейл Чекер* и 1С-Товары?</option>
          
        </select> <br />
        <select id="">
          <option value="">Методы и формулы расчета торговой наценки</option>
          
        </select> <br />
      </div>
    </div>
  )
}

export default info