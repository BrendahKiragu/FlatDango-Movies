// function to get all films resources
function getAllFilms() {
  fetch('http://localhost:3000/films')
    .then((res) => res.json())
    .then((films) => {
      films.forEach((film) => {
        renderOneMovie(film);
      });
    })
    .catch(error => console.log('Failed to fetch data:', error));
}

// function to get data from the fecth and render it to the DOM
function initialized() {
 
}


// Initialize the application
// document.addEventListener('DOMContentLoaded', function() {
//   initialized();
// });