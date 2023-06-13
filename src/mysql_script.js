//CONNECTION
let connection = {
    host: '127.0.0.1',
    //host: "localhost",
    database: 'LocalDatabase',
    user: 'root',
    password: 'maika123',
    port: 3303
  };

//RETO 1
let Query_CreateTableDireccion = "CREATE TABLE `direccion` (`direccion_id` INT NOT NULL AUTO_INCREMENT,`fechaCreacion` DATETIME NULL,PRIMARY KEY (`direccion_id`))";
let Query_AddColumnDireccion = "ALTER TABLE directions ADD direction_name VARCHAR(100)";
let Query_DeleteColumnDireccion = "ALTER TABLE directions DROP COLUMN direction_name";
let Query_DeleteTableDireccion = "DROP TABLE directions";
let Query_SetValuesToCero = "UPDATE Marks SET mark = 0";
let Query_SelectStudents = "SELECT first_name, last_name FROM students";
let Query_SelectTeachers = "SELECT * FROM teachers";

//RETO 2
let Query_SelectAVG = "SELECT AVG(mark) AS markAVG FROM marks WHERE subject_id = 1";
let Query_SelectCOUNT = "SELECT COUNT(student_id) AS total_students FROM students";
let Query_SelectGroups = "SELECT * FROM `groups`";
let Query_DeleteMarksCondition = "DELETE FROM marks WHERE mark > 5 AND date < DATE_SUB(NOW(), INTERVAL 1 YEAR)";
let Query_AddColumnStudents = "ALTER TABLE students ADD dateIn date";
let Query_UpdateStudentsDateIn = "UPDATE students SET dateIn = DATE_SUB(CURDATE(), INTERVAL 3 YEAR)";
let Query_UpdateStudentsDateID = "UPDATE students SET dateIn = CURDATE() WHERE student_id IN (1, 4, 6)";
let Query_SelectSubjectTeacher = "SELECT s.subject_id, s.title, COUNT(t.teacher_id) AS num_teachers FROM subjects s JOIN subject_teacher st ON s.subject_id = st.subject_id JOIN teachers t ON st.teacher_id = t.teacher_id GROUP BY s.subject_id, s.title";

//RETO 3
let Query_DeleteMarksDate = "DELETE FROM marks WHERE date < DATE_SUB(NOW(), INTERVAL 10 YEAR)";
let Query_UpdateMarksCinco = "UPDATE marks SET mark = 5 WHERE mark > 5";

module.exports = {
  Query_CreateTableDireccion: Query_CreateTableDireccion,
  Query_AddColumnDireccion: Query_AddColumnDireccion,
  Query_DeleteColumnDireccion: Query_DeleteColumnDireccion,
  Query_DeleteTableDireccion: Query_DeleteTableDireccion,
  Query_SetValuesToCero: Query_SetValuesToCero,
  Query_SelectStudents: Query_SelectStudents,
  Query_SelectTeachers: Query_SelectTeachers,

  Query_SelectAVG: Query_SelectAVG,
  Query_SelectCOUNT: Query_SelectCOUNT,
  Query_SelectGroups: Query_SelectGroups,
  Query_DeleteMarksCondition: Query_DeleteMarksCondition,
  Query_AddColumnStudents: Query_AddColumnStudents,
  Query_UpdateStudentsDateIn :Query_UpdateStudentsDateIn, 
  Query_UpdateStudentsDateID :Query_UpdateStudentsDateID, 
  Query_SelectSubjectTeacher :Query_SelectSubjectTeacher, 

  Query_DeleteMarksDate : Query_DeleteMarksDate,
  Query_UpdateMarksCinco : Query_UpdateMarksCinco, 
  
  connection: connection
}