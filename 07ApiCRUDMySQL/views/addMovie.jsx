'use strict';

let React = require('react');
let html = require('./mainTemplate');

let createMovie = props => {
  let { title } = props;
  return html({
    title,
    content: (
      <article className="">
        <header className="">
          <h1 className="text-center fw-bold my-1">Agregar Película</h1>
        </header>
        <form method="POST" action="/">
          <div class="my-2">
            <label for="movie_id" class="form-label">IMDB ID:</label>
            <input value="tt1028532" type="text" class="form-control" id="movie_id" name="movie_id" placeholder=""></input>
          </div>
          <div class="my-2">
            <label for="title" class="form-label">Título:</label>
            <input value="Siempre a tu lado" type="text" class="form-control" id="title" name="title" placeholder=""></input>
          </div>
          <div class="my-2">
            <label for="release_year" class="form-label">Año:</label>
            <input value="2009" type="text" class="form-control" id="release_year" name="release_year" placeholder=""></input>
          </div>
          <div class="my-2">
            <label for="rating" class="form-label">Calificacíon:</label>
            <input value="8" type="text" class="form-control" id="rating" name="rating" placeholder=""></input>
          </div>
          <div class="my-2">
            <label for="image" class="form-label">Poster:</label>
            <input value="https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR3,0,182,268_AL_.jpg" type="text" class="form-control" id="image" name="image" placeholder=""></input>
          </div>
          <button className="btn btn-primary p-2 w-100">Agregar</button>
        </form>
      </article>
    )
  })
};

module.exports = createMovie;