'use strict';

let path = require('path');
let http = require('http').createServer(webServer);
let fs = require('fs');

let urls = [
  {
    id: 1,
    route : '',
    output : 'assets/index.html'
  },{
    id: 2,
    route : 'acerca',
    output : 'assets/acerca.html'
  },{
    id: 3,
    route : 'contacto',
    output : 'assets/contacto.html'
  }
];
function webServer(req, res){
  let pathUrl = path.basename(req.url);
  let u = new URL(req.url,'http://localhost:3000/');
  let id = parseInt(u.searchParams.get('id'));

  urls.forEach(elem => {
    if(elem.route === pathUrl || elem.id === id){
      res.writeHead(200, {'Content-Type': 'text/html'});
      fs.readFile(elem.output, (err, data) => {
        if(err) throw err;
        res.end(data);
      });
    };
  });

  if(!res.finished){
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.readFile('assets/404.html',(err, data) => {
      if(err) throw err;
      res.end(data);
    });
  };
};

http.listen(3000);

console.log('Server is running...');