const router = require("express").Router()
const { passwords } = require("../controllers/auth.controller")

router.post("/passwords", passwords)

module.exports = router