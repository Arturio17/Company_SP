import NavMenu from '../../entities/navMenu/navMenu.js';

const Header = () => {
    return (`
        <div class="header__container">
            <span class="header__container_logo">
                <img src="./images/logo.png" alt="Логотип">
            </span>
            <nav class="header__container_nav">
                <span><a href="">ГЛАВНАЯ</a></span>
                <span><a href="">КАТАЛОГ</a></span>
                <span><a href="">О КОМПАНИИ</a></span>
                <span><a href="">ОПЛАТА И ДОСТАВКА</a></span>
                <span><a href="">КОНТАКТЫ</a></span>            
            </nav>
            <span class="header__container_burger" id="burgerButton">
                <img class="burger-open" src="./images/burger/burger.png" alt="Открыть меню">
                <img class="burger-close" src="./images/burger/close.png" alt="Закрыть меню">
            </span>
        </div>
    `)
}

window.toggleMenu = function() {
    const burger = document.querySelector('.header__container_burger');
    const isActive = burger.classList.contains('active');
    
    if (!isActive) {
        burger.classList.add('active');
        window.openNavMenu();
    } else {
        burger.classList.remove('active');
        window.closeNavMenu();
    }
}

window.openNavMenu = function() {
    if (document.getElementById('navMenu')) {
        return;
    }
    
    const navMenu = document.createElement('div');
    navMenu.id = 'navMenu';
    navMenu.innerHTML = NavMenu();
    document.body.appendChild(navMenu);
    
    // Задержка для плавного появления
    setTimeout(() => {
        navMenu.classList.add('active');
        // Анимация появления пунктов меню
        const menuItems = navMenu.querySelectorAll('.navMenu > *');
        setTimeout(() => {
            menuItems.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            });
        }, 200);
    }, 10);
}

window.closeNavMenu = function() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        // Анимация исчезновения пунктов меню
        const menuItems = navMenu.querySelectorAll('.navMenu > *');
        menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
        });
        
        navMenu.classList.remove('active');
        setTimeout(() => {
            if (navMenu.parentNode) {
                navMenu.parentNode.removeChild(navMenu);
            }
        }, 400);
    }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const burgerButton = document.getElementById('burgerButton');
        if (burgerButton) {
            burgerButton.addEventListener('click', window.toggleMenu);
        }
        
        document.addEventListener('click', (e) => {
            const navMenu = document.getElementById('navMenu');
            const burger = document.querySelector('.header__container_burger');
            
            if (navMenu && burger && !navMenu.contains(e.target) && !burger.contains(e.target)) {
                window.closeNavMenu();
                burger.classList.remove('active');
            }
        });
    }, 100);
});

export default Header;