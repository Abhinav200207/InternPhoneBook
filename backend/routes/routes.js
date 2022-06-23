const express = require('express')
const { get, update, create, deleteContact } = require('../controller/controller')
const router = express.Router()

router.route("/get").get(get)
router.route("/put").put(update)
router.route("/create").post(create)
router.route("/delete").delete(deleteContact)

module.exports = router;