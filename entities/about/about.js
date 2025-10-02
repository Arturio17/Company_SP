import Button from '../../shared/button/button.js';
import Title from '../../shared/titleH3/title.js';
import Gallery from '../../shared/gallery/gallery.js';

const About = () => {
    return (`
        <div class="main__about">
            ${Title("О КОМПАНИИ")}
            <div class="main__about_in">
                ${Gallery('elevatorUp.png', 'elevatorFront.png', 'elevatorDown.png')}
                <div class="main__about__in_description">
                    <p class="main__about__in_description-title">Компания «SPARTSPRO» специализируется на поставках лифтового оборудования, комплектующих и запчастей для лифтов и эскалаторов ведущих мировых и российских производителей.</p>
                    <ul>
                        <li>
                            <div class="about__li_img">
                                <img src="./images/status/red24.png" alt="-">
                            </div>
                            <div class="about__li_p">
                                <p>Гарантия качества – работаем только с проверенными производителями.</p>
                            </div>
                        </li>
                        <li>
                            <div class="about__li_img">
                                <img src="./images/status/red24.png" alt="-">
                            </div>
                            <div class="about__li_p">
                                <p>Собственный склад – более 30 000 наименований в наличии для оперативных отгрузок.</p>
                            </div>
                        </li>
                        <li>
                            <div class="about__li_img">
                                <img src="./images/status/red24.png" alt="-">
                            </div>
                            <div class="about__li_p">
                                <p>Соблюдение сроков – приоритет компании: быстрая обработка заказов и доставка без задержек.</p>
                            </div>
                        </li>
                    </ul>

                    <p class="main__about__in_description-footer">Мы обеспечиваем бесперебойные поставки для ваших проектов. Оставьте заявку – и получите коммерческое предложение в кратчайшие сроки!</p>
                    ${Button('Подробнее', '')}
                </div>
            </div>
        </div>
    `)
}

export default About;