// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var viewButton = document.querySelector('.view-saved-button');
var createButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var newBookButton = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var saveCoverView = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover();

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayRandomCover);
createButton.addEventListener('click', viewForm);
viewButton.addEventListener('click', displaySaved);

// Create your event handlers and other functions here 👇
function displayRandomCover() {
  var coverImage = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var tagline1 = descriptors[getRandomIndex(descriptors)];
  var tagline2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage, title, tagline1, tagline2);
  showCurrentCover();
}

function viewForm() {
  formView.classList.toggle('hidden');
  homeView.classList.toggle('hidden');
  saveButton.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
}

function displaySaved() {
  saveCoverView.classList.toggle('hidden');
  formView.classList.toggle('hidden');
  homeView.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveButton.classList.toggle('hidden');
  showCoversSection()
}

function showCoversSection() {
  saveCoverView.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    saveCoverView.innerHTML +=
    `<div class = "small-cover" id='${i}'>
      <img class = "small-cover" src = "${savedCovers[i].cover}">
      <h3 class = "cover-title" >${savedCovers[i].title}</h2>
    </div>`;
  }
}

function showCurrentCover() {
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
