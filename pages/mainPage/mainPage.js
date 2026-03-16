import Catalog from '../../entities/catalog/catalog.js';
import About from '../../entities/about/about.js';
import Readme from '../../entities/readme/readme.js';

const MainPage = () => {
    return (
        [
        Catalog(),
        About()
        
        ]      
    )
}

export default MainPage;
