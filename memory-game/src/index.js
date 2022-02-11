// Card options
const cardArray = [
    {
        name: 'buffon',
        img: '../images/buffon.webp'
    },
    {
        name: 'buffon',
        img: '../images/buffon.webp'
    },
    {
        name: 'giggs',
        img: '../images/giggs.webp'
    },
    {
        name: 'giggs',
        img: '../images/giggs.webp'
    },
    {
        name: 'kaka',
        img: '../images/kaka.webp'
    },
    {
        name: 'kaka',
        img: '../images/kaka.webp'
    },
    {
        name: 'maradona',
        img: '../images/maradona.webp'
    },
    {
        name: 'maradona',
        img: '../images/maradona.webp'
    },
    {
        name: 'messi',
        img: '../images/messi.webp'
    },
    {
        name: 'messi',
        img: '../images/messi.webp'
    },
    {
        name: 'ronaldo',
        img: '../images/ronaldo.webp'
    },
    {
        name: 'ronaldo',
        img: '../images/ronaldo.webp'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// Game board
function createBoard(){
    for(var i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', '../images/football.jpeg')
        card.setAttribute('data-id', i)
        card.classList.add('card-img')
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// Check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', '../images/football.jpeg')
        cards[optionTwoId].setAttribute('src', '../images/football.jpeg')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You matched them all!'
    }
}

// Flip cards
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()