'use strict';

let React = require('react');
let html = require('./mainTemplate');

let editMovie = props => {
  let { title, data } = props;
  return html({
    title,
    content: (
      <article className="">
        <header className="">
          <h1 className="text-center fw-bold my-1">Agregar Película</h1>
        </header>
        <form method="POST" action={`/actualizar/#${data[0].movie_id}`}>
          <div class="my-2">
            <label for="movie_id" class="form-label">IMDB ID:</label>
            <input value={data[0].movie_id} type="text" class="form-control" id="movie_id" name="movie_id" readOnly></input>
          </div>
          <div class="my-2">
            <label for="title" class="form-label">Título:</label>
            <input value={data[0].title} type="text" class="form-control" id="title" name="title" ></input>
          </div>
          <div class="my-2">
            <label for="release_year" class="form-label">Año:</label>
            <input value={data[0].release_year} type="text" class="form-control" id="release_year" name="release_year" ></input>
          </div>
          <div class="my-2">
            <label for="rating" class="form-label">Calificacíon:</label>
            <input value={data[0].rating} type="text" class="form-control" id="rating" name="rating" ></input>
          </div>
          <div class="my-2">
            <label for="image" class="form-label">Poster:</label>
            <input value={data[0].image} type="text" class="form-control" id="image" name="image" ></input>
          </div>
          <button className="btn btn-primary p-2 w-100">Editar</button>
        </form>
      </article>
    )
  })
};

module.exports = editMovie;