// Function to get all films resources
function getAllFilms() {
  fetch('http://localhost:3000/films/')
    .then((res) => res.json())
    .then((films) => {
      films.forEach((film) => {
        renderOneMovie(film);
      });
    })
    .catch(error => console.log('Failed to fetch data:', error));
}

//renders the details of one film to the DOM
function renderOneMovie(film) {
  const ul = document.getElementById('films');
  const li = document.createElement('li');
  li.classList.add('film-item');

//Creates a list containers for the film's details
  li.innerHTML = `
  <img src="${film.poster}">
  <div class="content">
    <h3>${film.title}</h3>
    <p>Runtime: ${film.runtime}</p>
    <p>Showtime: ${film.showtime}</p>
    <p id="tickets-count-${film.id}">Tickets available: ${film.capacity - film.tickets_sold}</p>
    <button id="buyTicket" ${film.tickets_sold >= film.capacity ? 'disabled' : ''}>Buy Ticket</button>
  </div>`;
  ul.appendChild(li);

  const buyTicketBtn = li.querySelector(`#buyTicket`);

//activates the buy ticket button when clicked
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

  // Adds a keyboard eventListener to buy ticket button
  // Checks if the key pressed is Enter or Spacebar
  buyTicketBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      buyTicketBtn.click();
    }
  });
}

//updates ticket availability after a ticket is bought
function updateTicketAvailability(film) {
  const ticketsCountElement = document.getElementById(`tickets-count-${film.id}`);
  ticketsCountElement.textContent = `Tickets available: ${film.capacity - film.tickets_sold}`;
}

// Function to get data from the fetch and render it to the DOM
function initialize() {
  getAllFilms();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  initialize();
});
