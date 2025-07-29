const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

let currentIndex = null;

function getRandomIndex(excludeIndex) {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === excludeIndex);
  return index;
}

function displayQuote(index) {
  const { text, author } = quotes[index];
  quoteTextEl.textContent = `"${text}"`;
  quoteAuthorEl.textContent = `— ${author}`;
  currentIndex = index;
}

function loadNewQuote() {
  const newIndex = getRandomIndex(currentIndex);
  displayQuote(newIndex);
}

// Initialize on page load
window.onload = () => {
  loadNewQuote();
};

// Event listener for button
newQuoteBtn.addEventListener("click", loadNewQuote);
