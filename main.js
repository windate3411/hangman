// select DOM elements
const wordEl = document.getElementById('word')
const wrongWordEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const bodyParts = document.querySelectorAll('.body-parts')

// defined play words
const words = ['application', 'programming', 'apple']
let selectedWord = words[Math.floor(Math.random() * words.length)]

// set up empty array for display
const correctLetters = ['p', 'a', 'l', 'e'];
const wrongLetters = [];

// show hidden words
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord.split('')
      .map(item =>
        `
        <div class="letter">
          ${correctLetters.includes(item) ? item : ""}
        </div>
        `
      ).join("")
    }
  `
  // create a variable for comparison
  const innerWords = wordEl.innerText.replace(/\n/g, '')
  if (innerWords === selectedWord) {
    finalMessage.innerText = 'Congrats!You won! 😁';
    popup.style.display = 'flex';
  }

}

function showNotificaiton() {
  notification.classList.add('show')
  setTimeout(() => {
    notification.classList.remove('show')
  }, 3000)
}

function upDateWrong(letter) {
  wrongWordEl.innerHTML += `
    <span>${letter} </span>
  `;

  // display parts
  bodyParts.forEach((item, index) => {
    const errors = wrongLetters.length
    if (index < errors) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })

  // check if lost
  if (wrongLetters.length === 6) {
    finalMessage.innerText = 'Sorry! You lost! 😢';
    popup.style.display = 'flex'
  }
}

displayWord()

// listen to keydown events 
window.addEventListener('keydown', e => {
  // check if user press a-z
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter)
        displayWord()
      } else {
        //show notification
        showNotificaiton()
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter)
        //updated wrong letters
        upDateWrong(letter)
      } else {
        showNotificaiton()
      }
    }
  }
})

// reset game and play again
playAgainBtn.addEventListener('click', e => {

  // empty Arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  // select a new word
  selectedWord = words[Math.floor(Math.random() * words.length)]

  // display words
  displayWord()

  // update wrong letters and clear the board
  upDateWrong('')
  wrongWordEl.innerHTML = `<h2>Wrong Letters</h2>`

  // hide the popup
  popup.style.display = 'none'
})

function playAgain() {

}