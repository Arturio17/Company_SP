import Catalog from '../../entities/catalog/catalog.js';
import About from '../../entities/about/about.js';


const MainPage = () => {
    return (
        [
        Catalog(),
        About()
        
        ]      
    )
}

export default MainPage;
