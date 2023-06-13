const { json } = require("express");
const { router } = require("../app");
const { QUERY } = require("../mysql_script")
const mysql = require("mysql2/promise");

async function selectAVG_Mark(request, response) {

  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SelectAVG;
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

async function selectCount_Students(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SelectCOUNT;
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

async function selectGroups(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SelectGroups;
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

async function deleteMarksCondition(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_DeleteMarksCondition;
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

async function addColumnsStudents(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_AddColumnStudents;
    try {
      console.log("Consulta lanzada: " + consulta);
      let [result] = await LocalConnection.query(consulta);

      console.log("¡Exito! Exponiendo datos...");
      console.log(result);
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

async function updateStudentsDateIn(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_UpdateStudentsDateIn;
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

async function updateStudentsDateID(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_UpdateStudentsDateID;
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

async function selectSubjectTeacher(request, response) {
  try {
    let LocalConnection  = await mysql.createConnection({host: 'localhost',database: 'LocalDatabase',user: 'root',password: 'maika123',port: 3303});

    console.log("Conexion efectuada : **HOST: " + LocalConnection.host + " - **DATABASE: " + LocalConnection.database);

    let consulta = QUERY.Query_SelectSubjectTeacher;
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
  selectAVG_Mark: selectAVG_Mark,
  selectCount_Students: selectCount_Students,
  selectGroups: selectGroups,
  deleteMarksCondition:deleteMarksCondition,
  addColumnsStudents:addColumnsStudents,
  updateStudentsDateIn:updateStudentsDateIn,
  updateStudentsDateID:updateStudentsDateID,
  selectSubjectTeacher:selectSubjectTeacher
};