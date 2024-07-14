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

function render(film){
  const ul = document.getElementById('films')
  const li = document.createElement('li')
  li.classList('film-item')

  li.innerHTML =`
  <img src="${film.poster}">
  <div class = "content">
  <h3>${film.title}</h3>
  <p ${film.showtime}> Showtime</p>
  <p> Tickets available: ${film.capacity- film.tickets_sold}</P>
  <button id="buyTicket-${film.id}"disabled>Buy Ticket</button>
  </div>`
  ul.appendChild(li)



}




// function to get data from the fecth and render it to the DOM
// function initialized() {
//  getAllFilms()
// }


// Initialize the application
// document.addEventListener('DOMContentLoaded', function() {
//   initialized();
// });