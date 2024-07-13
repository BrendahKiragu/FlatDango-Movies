console.log("test")
function getAllFirms(){
  fetch()
  .then((res)=>)
}

function renderOneMovie(movie){
  //build a movie
const ul = document.getElementById('films')
const li = document.createElement('li')
li.classList.add('film-item')
li.innerHTML=`
<img src="${film.poster}">
<div  class="content">
<h4> ${film.title} </h4>
<p> <span class = "showtime">${film.showtime}</span> showtime
</p>
<p> ${tickets_sold} </p>
</div>
`
ul.appendChild(li)
}

//gets data and renders the movies to the DOM
// function initialized(){
// filmsdata.forEach((movie)=> renderOneMovie(movie))
// }
// initialized()