const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;

playerLivesCount.textContent = playerLives

const getData = () => [
    {imgSrc: "./Dark-Side-Images/Darth Vader Kneel1.jpeg"},
    {imgSrc: "./Dark-Side-Images/Kylo Ren.jpeg"},
    {imgSrc: "./Dark-Side-Images/Darth Maul Hood.jpeg"},
    {imgSrc: "./Dark-Side-Images/Darth Maul Light Saber.jpeg"},
    {imgSrc: "./Dark-Side-Images/Darth Vader Grab.webp"},
    {imgSrc: "./Dark-Side-Images/Emperor Palpatine.jpeg"},
    {imgSrc: "./Dark-Side-Images/Kylo Ren2.jpeg"},
    {imgSrc: "./Dark-Side-Images/Palpatine_FandD.webp"},
    {imgSrc: "./Jedi-Images/Ahsoka Tano Light Saber.jpeg"},
    {imgSrc: "./Jedi-Images/Ahsoka-Tano-lightsabers-pose-df36cb5.jpeg"},
    {imgSrc: "./Jedi-Images/Grogu.jpeg"},
    {imgSrc: "./Jedi-Images/Grogu2.jpeg"},
    {imgSrc: "./Jedi-Images/Luke Skywalker - Return of the Jedi.jpeg"},
    {imgSrc: "./Jedi-Images/luke_the_hero_small.webp"},
    {imgSrc: "./Jedi-Images/Obi Wan.webp"},
    {imgSrc: "./Jedi-Images/obi-wan-kenobi-headline.webp"},
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
        checkCards(e);
    })
})

const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard)
}
}


cardGenerator();