export function generateProductCard(array) {

    const cardContainer = document.querySelector('.index-main');

    array.forEach(element => {

        const productCard = document.createElement('article');
        productCard.classList.add('index-main__product-card');
    
        const productImage = document.createElement('img');
        productImage.classList.add('index-main__image');
        productImage.src = element.image_source;

        const productHeading = document.createElement('h2');
        productHeading.classList.add('index-main__heading');
        productHeading.innerText = element.heading;

        const productText = document.createElement('p');
        productText.classList.add('index-main__text');
        productText.innerText = element.description;

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('index-main__icon-container');

        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('index-main__rating-container');

        const starIcon = document.createElement('div');
        starIcon.classList.add('index-main__star-icon');
        starIcon.innerHTML = '<i class="fa-solid fa-star"></i>';

        const ratingElement = document.createElement('p');
        ratingElement.classList.add('index-main__rating');
        ratingElement.innerText = element.rating;

        const heartIcon = document.createElement('div');
        heartIcon.classList.add('index-main__heart-icon');
        heartIcon.innerHTML = '<i class="fa-solid fa-heart-circle-plus"></i>';

        ratingContainer.append(starIcon);
        ratingContainer.append(ratingElement);

        iconContainer.append(ratingContainer);
        iconContainer.append(heartIcon);

        productCard.append(productImage);
        productCard.append(productHeading);
        productCard.append(productText);
        productCard.append(iconContainer);

        cardContainer.append(productCard);
    });


}