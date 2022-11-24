const express = require('express')
const router = express.Router()
const collageController = require("../controllers/collageControllers")
const internController = require("../controllers/internController")

router.post('/functionup/colleges', collageController.createCollege)

router.post('/functionup/interns', internController.createIntern)

router.get('/functionup/collegeDetails',collageController.getcollegeDetails)



module.exports = router