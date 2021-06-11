const fakes = document.querySelectorAll("#fakePainting")
const real = document.querySelectorAll("#realPainting")
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', ()=> {
 currentQuestionIndex++
 setNextQuestion()
})

// function startGame() {
//   startButton.classList.add('hide')
//   questionContainerElement.classList.remove('hide')
// }

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// function realOrFake() {
// if(fakes){
// alert("it's  a fake")
// }else{
//   alert("Buy quick, it's real!")
// }
// }
// module.exports = {
//     shuffle: shuffle,
// }

for (let i in fakes) {
  fakes[i].onclick = function() {
    alert("this is fake!!");
  };
}

for (let i in real) {
  real[i].onclick = function() {
    alert("But quick, this is the real deal!!!");
  };
}