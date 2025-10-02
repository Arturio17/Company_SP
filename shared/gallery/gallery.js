const Gallery = (imageNameLarge, imageNameMini1, imageNameMini2) => {

    return (`
        <div class="galery">
            <div class="galery__img_large">
                <img src="./images/companyGallery/${imageNameLarge}" alt="">
            </div>
            <div class="galery__img_mini">
                    <img src="./images/companyGallery/${imageNameMini1}" alt="">
                    <img src="./images/companyGallery/${imageNameMini2}" alt="">
            </div>
        </div>
`)
}

export default Gallery;