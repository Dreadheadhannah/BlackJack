let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber = Math.floor(math.random()*13) + 1 

    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else {return randomNumber}
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " + sum

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = true
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)

    startGame()
}
