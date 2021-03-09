// Single Thread
'use strict';

function singleThread() {
  process.argv[2] = 'Estamos aprendiendo NodeJs';
  process.argv[3] = 19;
  process.argv[4] = null;
  process.argv[5] = true;

  console.log('---------------------------------------');
  console.log(`Id del proceso...${process.pid}`);
  console.log(`Titulo...${process.title}`);
  console.log(`Directorio de node...${process.execPath}`);
  console.log(`Directorio actual...${process.cwd()}`);
  console.log(`Versión de node...${process.version}`);
  console.log(`Versión de dependencias...${process.versions}`);
  console.log(`Plataforma SO...${process.platform}`);
  console.log(`Arquitectura...${process.arch}`);
  console.log(`Tiempo activo de node...${process.uptime()}`);
  console.log(`Argumento del proceso...${process.argv}`);
  console.log('---------------------------------------');
  // console.log(process.argv[0], process.argv[1]);

  for (let key in process.argv) {
    console.log(process.argv[key]);
  };
};

singleThread();
