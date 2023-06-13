const { json } = require("express");
const { router } = require("../app");
const { QUERY } = require("../mysql_script")
const mysql = require("mysql2/promise");

async function createTableDireccion(request, response) {
  let LocalConnection
  try {
    LocalConnection = await mysql.createConnection(QUERY.connection);

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_CreateTableDireccion;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

async function addColumnDireccion(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_AddColumnDireccion;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

async function deleteColumnDireccion(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_DeleteColumnDireccion;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

async function deleteTableDireccion(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_DeleteTableDireccion;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

async function setValuesCero(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SetValuesToCero;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

async function selectStudents(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SelectStudents;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

async function selectTeachers(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });


    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SelectTeachers;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
      await LocalConnection.end();
      return json.result(result);

    } catch (error) {
      console.log("¡Error! - Consulta " + consulta)
      console.log("Mensaje de error " + error)
      console.log("Cerrando Conexion...");
      await LocalConnection.end();

      return json.result(error);
    }


  }
  catch (error) {
    console.log("Se ha producido un error durante la conexion : " + error)
    return json.result(error);
  }
}

module.exports = {
  createTableDireccion: createTableDireccion,
  addColumnDireccion: addColumnDireccion,
  deleteColumnDireccion: deleteColumnDireccion,
  deleteTableDireccion: deleteTableDireccion,
  setValuesCero: setValuesCero,
  selectStudents: selectStudents,
  selectTeachers: selectTeachers
};