// function to get all films resources
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

function renderOneMovie(film){
  const ul = document.getElementById('films')
  const li = document.createElement('li')
  li.classList.add('film-item')

  li.innerHTML =`
  <img src="${film.poster}">
  <div class = "content">
  <h3>${film.title}</h3>
  <p > Runtime: ${film.runtime}</p>
  <p > Showtime: ${film.showtime}</p>
  <p> Tickets available: ${film.capacity- film.tickets_sold}</P>
  <button id="buyTicket-${film.id}"disabled>Buy Ticket</button>
  </div>`
  ul.appendChild(li)

const buyTicketBtn = li.querySelector("buyTicket-${film.id}")
buyTicketBtn.addEventListener("click", function(){
   if (film.capacity > film.tickets_sold) {
    film.tickets_sold++;
     ticketsCountElement.textContent = `Tickets Available: ${film.capacity - film.tickets_sold}`;
 if (film.tickets_sold >= film.capacity) {
      buyTicketBtn.disabled = true;
      buyTicketBtn.textContent = 'Sold Out';
    }
  } else {
    alert('Sorry, no tickets available.');
  }
})

buyTicketBtn.addEventListener('keydown', (event) => {
  // Check if the key pressed is Enter or Spacebar
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault(); // Prevent default form submission behavior
    // Trigger the ticket purchase logic
    buyTicketBtn.click();
  }
});
}




//function to get data from the fecth and render it to the DOM
function initialized() {
 getAllFilms()
 }


//Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initialized();
});