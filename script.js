const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;

playerLivesCount.textContent = playerLives

const getData = () => [
    {imgSrc: "./Dark-Side-Images/Darth Vader Kneel1.jpeg"}
]

const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - .05)
    return cardData
}

const cardGenerator = () => {
    const cardData = randomize()
    console.log(cardData)

    cardData.forEach((item) => {
        console.log(item)
     

    const card = document.createElement("div")
    const face = document.createElement('img')
    const back = document.createElement("div")
    card.classList = "card"
    face.classList = "face"
    back.classList = "back"

    face.src = item.imgSrc

    section.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)

    card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard");
    })
})

const checkCards = (e) => {
    const clickedCard = e.target;

}
}


cardGenerator();