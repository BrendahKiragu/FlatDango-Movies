
//function to fetch first movie
 function fetchFirstFilm (){
   fetch('http://localhost:3000/films/1')
   .then(res => res.json())
   .then((films)=>{
     renderFirstMovie(films)
   })
   .catch(error=>{console.log('Failed to fetch data:', error)})
   }

//fetches and renders the first movie when the page loads
 function renderFirstMovie(film){
    const firstMovie = document.getElementById('first-film')
    const list = document.createElement("li")
    list.classList.add('firstMoviecontainer')
    
    list.innerHTML = `
     <img src="${film.poster}">
     <h3>${film.title}</h3>
     <p>Runtime: ${film.runtime}</p>
     <p>Showtime: ${film.showtime}</p>
     <p> Description: ${film.description}</p>
     <p id="tickets-count-${film.id}">Tickets available: ${film.capacity - film.tickets_sold}</p>
     <button id="buyTicket" ${film.tickets_sold >= film.capacity ? 'disabled' : ''}>Buy Ticket</button>
  `
  firstMovie.appendChild(list)
  buyTickets(film)
 }

// Function to get all films resources
function getAllFilms() {
  fetch('http://localhost:3000/films/')
    .then((res) => res.json())
    .then((films) => {
          films.forEach((film) => {
          renderAllMovies(film);
      });
    })
    .catch(error => console.log('Failed to fetch data:', error));
}

//updates ticket availability after a ticket is bought
function updateTicketAvailability(film) {
  const ticketsCountElement = document.getElementById(`tickets-count-${film.id}`);
  ticketsCountElement.textContent = `Tickets available: ${film.capacity - film.tickets_sold}`;
}

function renderMovieDetails(film, containerId) {
  const movieDetails = document.getElementById(containerId);
  movieDetails.innerHTML = `
    <li id="selectedMovie">
      <img src="${film.poster}" alt="${film.title} poster">
      <h3>${film.title}</h3>
      <p>Runtime: ${film.runtime}</p>
      <p>Showtime: ${film.showtime}</p>
      <p> Description: ${film.description}</p>
      <p id="tickets-count-${film.id}">Tickets available: ${film.capacity - film.tickets_sold}</p>
      <button id="buyTicket" ${film.tickets_sold >= film.capacity ? 'disabled' : ''}>Buy Ticket</button>
    </li>
  `;
  
  buyTickets(film)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function buyTickets (film){
 const buyTicketBtn = document.getElementById(`buyTicket`);
 buyTicketBtn.addEventListener("click", function () {
    if (film.capacity > film.tickets_sold) {
      film.tickets_sold++;
      updateTicketAvailability(film);

      if (film.tickets_sold >= film.capacity) {
        buyTicketBtn.disabled = true;
      }
    } else {
      alert(`Sorry, no tickets available.`);
    }
  });

  //adds a keyboard eventListener to buy ticket button
   buyTicketBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      buyTicketBtn.click();
    }
  });
}

//renders the details of all films to the DOM
 function renderAllMovies(film) {
   const ul = document.getElementById('films');
   const li = document.createElement('li');
   li.classList.add('film-item');

 //Creates a list containers for the film's details
   li.innerHTML = `
    <img src="${film.poster}">
    <h3>${film.title}</h3>
   `
   ul.appendChild(li);

  li.addEventListener('click', () => {
  renderMovieDetails(film, 'first-film');})
  }

// Function to get data from the fetch and render it to the DOM
function initialize() {
  fetchFirstFilm()
  getAllFilms();  
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  initialize();
});
