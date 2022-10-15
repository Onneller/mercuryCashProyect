const express = require('express')

const router = express.Router()

const mainController = require("../controllers/mainController.js")

router.get("/login", mainController.login)

router.get("/registro", mainController.registro)

router.post("/registro", mainController.processRegistrer)




module.exports = router;



