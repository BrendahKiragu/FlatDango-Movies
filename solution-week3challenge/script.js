//console.log("test")
document.addEventListener('DOMContentLoaded', function(){
  initialized()
})

//gets all firms resourses
function getAllFirms(){
  fetch('http://localhost:3000/films')
  .then((res)=> res.json())
  .then((data)=> console.log(data))
}

//gets data and renders the movies to the DOM
function initialized(){
  getAllFirms()
//films.forEach((movie)=> renderOneMovie(movie))
}

// function renderOneMovie(movie){
// build a movie
// const ul = document.getElementById('films')
// const li = document.createElement('li')
// li.classList.add('film-item')
// li.innerHTML=`
// <img src="${film.poster}">
// <div  class="content">
// <h4> ${film.title} </h4>
// <p> <span class = "showtime">${film.showtime}</span> showtime
// </p>
// <p> ${tickets_sold} </p>
// </div>
// `
// ul.appendChild(li)
// }

