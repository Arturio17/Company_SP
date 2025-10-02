import Header from './widgets/header/header.js'
import MainPage from './pages/mainPage/mainPage.js'


const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

header.innerHTML = Header();
main.innerHTML = MainPage();