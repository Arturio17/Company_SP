import Title from '../../shared/titleH3/title.js';

const Readme = () => {
    return (`
        <div class="main__readme">
            ${Title("README")}
            <div class="readme__content">
                <ul class="readme__list">
                    <li class="readme__item">
                        <div class="readme__icon">📁</div>
                        <div class="readme__text">
                            <strong>Архитектура:</strong> FSD (Feature-Sliced Design). В соответствии с данной методологией были созданы папки shared (содержит переиспользуемые элементы: кнопка, карточка товара, заголовок, ...) - entities (сюда я добавил отдельные элементы главной страницы: Каталог товаров, О компании, данный блок Readme) - widgets (добавил сюда header) - pages (добавил главную страницу, используя уже готовые элементы из папки entities). Так же на верхнем уровне добавил файлы main.js (отвечает за рендеринг всех компонентов на страницу index.html), style.css (стили, которые относятся ко всему сайту).
                        </div>
                    </li>
                    <li class="readme__item">
                        <div class="readme__icon">⚙️</div>
                        <div class="readme__text">
                            <strong>Инструменты:</strong> Использовались только чистые html, css, javascript. Без библиотек и фреймворков.
                        </div>
                    </li>
                    <li class="readme__item">
                        <div class="readme__icon">📱</div>
                        <div class="readme__text">
                            <strong>Адаптивность:</strong> Сайт полностью адаптивен под все устройства с шириной экрана от 360px в соответствии с макетами из Figma.
                        </div>
                    </li>
                    <li class="readme__item">
                        <div class="readme__icon">🧩</div>
                        <div class="readme__text">
                            <strong>Анимации:</strong> Были добавлены дополнительные анимации (CSS Transitions & Keyframes) для более комфортного взаимодействия пользователя с сайтом. 
                        </div>
                    </li>
                    <li class="readme__item">
                        <div class="readme__icon">🚀</div>
                        <div class="readme__text">
                            <strong>Время:</strong> На разработку ушло 4 дня (29.09 - 02.10)
                        </div>
                    </li>
                    <li class="readme__item">
                        <div class="readme__text">
                            <strong>Ссылка на резюме:</strong> https://disk.yandex.com.am/i/bFDfRQtJsr4g6Q
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `)
}

export default Readme;
