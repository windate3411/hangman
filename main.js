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

displayWord()