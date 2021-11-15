const p1 = {
    name: "playerOneName",
    nameInput: document.querySelector("#p1Name"),
    score: 0,
    display: document.querySelector("#playerOneSpan"),
    przycisk: document.querySelector("#playerOneButton"),
    setScore: 0,
    sety: document.querySelector("#playerOneSet")
}

const p2 = {
    name: "playerTwoName",
    nameInput: document.querySelector("#p2Name"),
    score: 0,
    display: document.querySelector("#playerTwoSpan"),
    przycisk: document.querySelector("#playerTwoButton"),
    setScore: 0,
    sety: document.querySelector("#playerTwoSet")
}
let gameOver = false;
let maxScore = 3;
const listaSetow = document.querySelector("#listaSetow")
const wynikSeta = document.querySelector("#taLinia")
const gratulacje = document.querySelector("#congratsLi")

p1.nameInput.addEventListener("change", function () {
    p1.przycisk.innerText = `${this.value} + 1`
    p1.name = this.value;
    p1.nameInput.disabled = true;
})

p2.nameInput.addEventListener("change", function () {
    p2.przycisk.innerText = `${this.value} + 1`
    p2.name = this.value;
    p2.nameInput.disabled = true;
})

p1.przycisk.addEventListener(`click`, function () {
    p1.score += 1;
    p1.display.innerText = p1.score;
    if (p1.score >= maxScore && (p1.score - p2.score) > 1) {
        gameOver = true;
    }
    if (gameOver === true) {
        p2.display.style.color = "red";
        p1.display.style.color = "green"
        p1.przycisk.disabled = true;
        p2.przycisk.disabled = true;
        gratulacje.innerText = `${p1.name} wins!!!! wow!`

        p1.setScore += 1;
        p1.sety.innerText = p1.setScore;

        let wynikSetaKopia = wynikSeta.cloneNode(true);
        listaSetow.append(wynikSetaKopia)
    }
    if (p1.score > 0 || p2.score > 0) {
        maxScoreSelect.disabled = true;
    }

})
p2.przycisk.addEventListener(`click`, function () {
    p2.score += 1;
    p2.display.innerText = p2.score;
    if (p2.score >= maxScore && (p2.score - p1.score) > 1) {
        gameOver = true;

        if (gameOver === true) {
            p1.display.style.color = "red";
            p2.display.style.color = "green"
            p1.przycisk.disabled = true;
            p2.przycisk.disabled = true;
            gratulacje.innerText = `${p2.name} wins!!! wow!`
            p2.setScore += 1;
            p2.sety.innerText = p2.setScore;

            let wynikSetaKopia = wynikSeta.cloneNode(true);
            listaSetow.append(wynikSetaKopia)
        }
    }
    if (p1.score > 0 || p2.score > 0) {
        maxScoreSelect.disabled = true;
    }
})


const przyciskReset = document.querySelector("#resetButton")
const maxScoreSelect = document.querySelector("#maxscore");

przyciskReset.addEventListener(`click`, reset)

maxScoreSelect.addEventListener(`change`, function () {
    if (p1.score > 0 || p2.score > 0) {
        maxScoreSelect.disabled = true;
    }
    maxScore = parseInt(this.value); //this i have no idea why we can't use event on `select`, and extract value with diferent method than "this"
})
function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    p1.display.style.color = "black";
    p2.display.style.color = "black";
    p1.przycisk.disabled = false;
    p2.przycisk.disabled = false;
    gratulacje.innerText = " ";
    maxScoreSelect.disabled = false;
    gameOver = false;
}
// Get the element var elem = document.querySelector('#elem1');
// Create a copy of it var clone = elem.cloneNode(true); 
// Update the ID and add a class clone.id = 'elem2'; clone.classList.add('text-large'); 
// Inject it into the DOM elem.after(clone)