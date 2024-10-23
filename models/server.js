const express = require("express");
var cors = require('cors')
process.loadEnvFile();

class Server {
  constructor(parameters) {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    //Middlewares
    this.middleweres();

    // Rutas de mi aplicacion
    this.routes();
  }

  middleweres() {

    //CORS
    this.app.use(cors());

  //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor Corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
