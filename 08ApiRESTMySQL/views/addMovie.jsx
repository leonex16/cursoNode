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
          <div className="my-2">
            <label for="movie_id" className="form-label">IMDB ID:</label>
            <input value="tt1028532" type="text" className="form-control" id="movie_id" name="movie_id" placeholder=""></input>
          </div>
          <div className="my-2">
            <label for="title" className="form-label">Título:</label>
            <input value="Siempre a tu lado" type="text" className="form-control" id="title" name="title" placeholder=""></input>
          </div>
          <div className="my-2">
            <label for="release_year" className="form-label">Año:</label>
            <input value="2009" type="text" className="form-control" id="release_year" name="release_year" placeholder=""></input>
          </div>
          <div className="my-2">
            <label for="rating" className="form-label">Calificacíon:</label>
            <input value="8" type="text" className="form-control" id="rating" name="rating" placeholder=""></input>
          </div>
          <div className="my-2">
            <label for="image" className="form-label">Poster:</label>
            <input value="https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR3,0,182,268_AL_.jpg" type="text" className="form-control" id="image" name="image" placeholder=""></input>
          </div>
          <button className="btn btn-primary p-2 w-100">Agregar</button>
        </form>
      </article>
    )
  })
};

module.exports = createMovie;