const {Router} = require ("express")
const router = Router();
const reto1Ctrl = require("../controller/reto1.controller.js")
const reto2Ctrl = require("../controller/reto2.controller.js")
const reto3Ctrl = require("../controller/reto3.controller.js")

router.use((req, res, next) => {
    console.log('Petición recibida del cliente : URL: "'+ req.url +'" -METHOD:"'+ req.method +'" -USER:"'+req.headers['user-agent']+'"');
    next();
});  


//RETO 1
router.get("/CreateTableDireccion", reto1Ctrl.createTableDireccion );
router.get("/AddColumnDireccion", reto1Ctrl.addColumnDireccion );
router.get("/DeleteColumnDireccion", reto1Ctrl.deleteColumnDireccion );
router.get("/DeleteTableDireccion", reto1Ctrl.deleteTableDireccion );
router.get("/SetValuesCero", reto1Ctrl.setValuesCero );
router.get("/GetStudents", reto1Ctrl.selectStudents );
router.get("/GetTeachers", reto1Ctrl.selectTeachers );

//RETO 2
router.get("/GetAvgMark", reto2Ctrl.selectAVG_Mark)
router.get("/GetNumberStudents", reto2Ctrl.selectCount_Students)
router.get("/GetGroups", reto2Ctrl.selectGroups)
router.get("/DeleteMarks", reto2Ctrl.deleteMarksCondition)
router.get("/AddColumnStudents", reto2Ctrl.addColumnsStudents)
router.get("/UpdateStudentsDateIN", reto2Ctrl.updateStudentsDateIn)
router.get("/UpdateStudentsDateID", reto2Ctrl.updateStudentsDateID)
router.get("/GetSubjectTeacher", reto2Ctrl.selectSubjectTeacher)

//RETO 3
router.get("/GetAvgMark", reto3Ctrl.deleteMarksDate)
router.get("/GetNumberStudents", reto3Ctrl.updateMarksCinco)

module.exports = router; 