
const productWrapper = document.querySelector('.popular-wrapper');

const createCards = () => {
    for(let cards of products) {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h5')
        const product = document.createElement('h3');
        const priceTag = document.createElement('h4')

        card.classList.add('pop-card')
        title.classList.add('brand-name')
        product.classList.add('product-title')
        priceTag.classList.add('product-price')

        img.setAttribute('src', cards.img)
        title.textContent = cards.brand
        product.textContent = cards.name
        priceTag.textContent = cards.price

        card.append(img)
        card.append(title)
        card.append(product)
        card.append(priceTag)
        productWrapper.append(card)
    }
}

createCards();