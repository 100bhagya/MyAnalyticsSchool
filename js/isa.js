const cards = document.querySelectorAll('.card')
const prices = document.querySelectorAll('.container')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        for (let j = 0; j < prices.length; j++) {
            prices[j].classList.add('hidden')
            prices[j].classList.remove('active')
        }
        for (j = 0; j < cards.length; j++) {
            cards[j].classList.remove('clicked')
        }
        cards[i].classList.add('clicked')
        prices[i].classList.remove('hidden')
        prices[i].classList.add('active')
    })
}
