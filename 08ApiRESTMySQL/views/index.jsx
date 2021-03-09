'use strict';

let React = require('react');
let html = require('./mainTemplate');

let createRow = queryResult => {
  let listTr = queryResult.map(obj => {
    return (
      <tr key={obj.movie_id.toString()}>
        <td className="text-center text-capitalize fs-5" >{obj.movie_id}</td>
        <td className="text-center text-capitalize fs-5" >{obj.title}</td>
        <td className="text-center text-capitalize fs-5" >{obj.release_year}</td>
        <td className="text-center text-capitalize fs-5" >{obj.rating}</td>
        <td className="text-center text-capitalize fs-5" ><img src={obj.image} alt={obj.title} width="50px" height="auto"/></td>
        <td className="text-center text-capitalize fs-5" >
          <form method="GET" action={"/editar/" + obj.movie_id}>
            <button className="btn-edit btn btn-primary" type="submit">Editar</button>
          </form>
        </td>
        <td className="text-center text-capitalize fs-5" >
          <form method="POST" action={"/eliminar/" + obj.movie_id}>
            <button className="btn-delete btn btn-danger" type="submit">Borrar</button>
            <input type="hidden" name="_method" value="DELETE"/>
          </form>
        </td>
      </tr>
    );
  });

  // function confirmDelete(input){
  //   let ok = window.confirm('Are you sure you want to delete?');
  //   return ok ? input.parentNode.submit() : false;
  // };

  return listTr;
};

let Seasons = props => {
  let { title, data } = props;
  let params = {
    title,
    content: (
      <article className="">
      <h1 className="text-center fw-bold my-1">{title}</h1>
      <a href="/agregar" className="btn btn-success w-100 my-1">Agregar</a>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th className="text-center text-capitalize fs-4" scope="col">ID</th>
            <th className="text-center text-capitalize fs-4" scope="col">Título</th>
            <th className="text-center text-capitalize fs-4" scope="col">Año</th>
            <th className="text-center text-capitalize fs-4" scope="col">Puntuación</th>
            <th className="text-center text-capitalize fs-4" scope="col">Poster</th>
            <th className="text-center text-capitalize fs-4" scope="col">Btn 1</th>
            <th className="text-center text-capitalize fs-4" scope="col">Btn 2</th>
          </tr>
          <tbody>
            {createRow(data)}
          </tbody>
        </thead>
      </table>
    </article>
    )
  };

  return html(params);
};

module.exports = Seasons;