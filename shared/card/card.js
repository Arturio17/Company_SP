import Button from '../button/button.js'

const Card = (imageName, name, count) => {
    let statusImgURL = './images/status/red.png';
    let statusText = 'Под заказ';

    if(count > 0) {
        statusImgURL = './images/status/green.png';
        statusText = 'В наличии ' + count + ' м.'
    }
    return (`
        <div class="product">
            <div class="product__img">
                <img src="./images/products/${imageName}" alt="Нет изображения товара">
            </div>
            <div class="product__description">
                <div class="product__description_name">
                    <p>${name}</p>
                </div>
                <div class="product__description_status">
                    <div>
                        <img src="${statusImgURL}" alt="">
                    </div>
                    <p>${statusText}</p>
                </div>
                ${Button('Подробнее', '')}
            </div>
        </div>
`)
}

export default Card;