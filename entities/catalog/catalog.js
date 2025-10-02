import Card from '../../shared/card/card.js'
import Button from '../../shared/button/button.js';
import Title from '../../shared/titleH3/title.js';

const Catalog = () => {
    return (`
        <div class="main__catalog">
            ${Title("РЕКОМЕНДУЕМОЕ ОБОРУДОВАНИЕ")}

            <div class="main__catalog_products">
                ${
                    Card('GRS 9X21F(9Х17)-IWRC 1570.png', 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570', 50)
                }
                ${
                    Card('GRS AAA717X1.png', 'Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)', 0)
                }
                ${
                    Card('GRS 8X19S-NFC 1570.png', 'Стальной канат для лифта GRS 8X19S-NFC 1570', 50)
                }
                ${
                    Card('GRS 9X21F(9Х17)-IWRC 1570.png', 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570', 50)
                }
                ${
                    Card('GRS 8X19W-CWC 1570.png', 'Стальной канат для лифта GRS 8X19W-CWC 1570', 50)
                }
                ${
                    Card('GRS AAA717AJ1.png', 'Плоский тяговый ремень для лифта GRS AAA717AJ1 (8 кордов)', 50)
                }    
            </div>
            <div class="main__catalog_button">
                ${Button('Перейти в каталог', '')}
            </div>
        </div>
    `)
}

export default Catalog;