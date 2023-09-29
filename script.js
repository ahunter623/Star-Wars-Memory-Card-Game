const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 5;

playerLivesCount.textContent = playerLives

// Generate Object
const getData = () => [
    {imgSrc: "./Dark-Side-Images/Darth Vader Kneel1.jpeg", name: "Darth Vader Kneel"},
    {imgSrc: "./Dark-Side-Images/Kylo Ren.jpeg", name: "Kylo Ren"},
    {imgSrc: "./Dark-Side-Images/Darth Maul Hood.jpeg", name: "Darth Maul Hood"},
    {imgSrc: "./Dark-Side-Images/Darth Maul Light Saber.jpeg", name: "Darth Maul Light Saber"},
    {imgSrc: "./Dark-Side-Images/Darth Vader Grab.webp", name: "Darth Vader Grab"},
    {imgSrc: "./Dark-Side-Images/Emperor Palpatine.jpeg", name: "Emperor Palpatine"},
    {imgSrc: "./Dark-Side-Images/Kylo Ren2.jpeg", name: "Kylo Ren2"},
    {imgSrc: "./Dark-Side-Images/Palpatine_FandD.webp", name: "Palpatine FandD"},
    {imgSrc: "./Dark-Side-Images/Darth Vader Kneel1.jpeg", name: "Darth Vader Kneel"},
    {imgSrc: "./Dark-Side-Images/Kylo Ren.jpeg", name: "Kylo Ren"},
    {imgSrc: "./Dark-Side-Images/Darth Maul Hood.jpeg", name: "Darth Maul Hood"},
    {imgSrc: "./Dark-Side-Images/Darth Maul Light Saber.jpeg", name: "Darth Maul Light Saber"},
    {imgSrc: "./Dark-Side-Images/Darth Vader Grab.webp", name: "Darth Vader Grab"},
    {imgSrc: "./Dark-Side-Images/Emperor Palpatine.jpeg", name: "Emperor Palpatine"},
    {imgSrc: "./Dark-Side-Images/Kylo Ren2.jpeg", name: "Kylo Ren2"},
    {imgSrc: "./Dark-Side-Images/Palpatine_FandD.webp", name: "Palpatine FandD"},
    //{imgSrc: "./Dark-Side-Images/Galactic Empire Symbol.jpeg"},
    //{imgSrc: "./Jedi-Images/Jedi Symbol.jpeg"},
];

const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - .05)
    return cardData
}

const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData)

    //Generate HTML
    cardData.forEach((item) => {
        
    const card = document.createElement("div")
    const face = document.createElement('img')
    const back = document.createElement("div")
    card.classList = "card"
    face.classList = "face"
    back.classList = "back"

    //Attach Images to Cards
    face.src = item.imgSrc
    card.setAttribute("name", item.name);

    //Attach Cards
    section.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)

    card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
    })
})

//Check Cards
const checkCards = (e) => {
    console.log(e)
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped")
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);

    // Game Logic
if (flippedCards.length === 2) {
    if (flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
    ) {
    console.log("match");
    flippedCards.forEach(card => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
    })
    } else {
        console.log("wrong");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
       });
       playerLives--;
       playerLivesCount.textContent = playerLives;
       if (playerLives === 0) {
        restart("You are weak!");
       }
    }
  }
  //Game Winner
  if (toggleCard.length === 16) {
    restart("The force is strong with you!");
  }
};
}

// Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        //Randomize / Shuffle Cards
        setTimeout(()=> {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        }, 1000);
    })
    playerLives = 5;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
}

cardGenerator()