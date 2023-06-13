const { json } = require("express");
const { router } = require("../app");
const { QUERY } = require("../mysql_script")
const mysql = require("mysql2/promise");

async function deleteMarksDate(request, response) {
  try {
    let LocalConnection = await mysql.createConnection({ host: 'localhost', database: 'LocalDatabase', user: 'root', password: 'maika123', port: 3303 });

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_DeleteMarksDate;
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
    await LocalConnection.end()
    return json.result(error);
  }
}

async function updateMarksCinco(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_UpdateMarksCinco;
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
  deleteMarksDate: deleteMarksDate,
  updateMarksCinco: updateMarksCinco
};