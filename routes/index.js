const express = require("express")
const router = express.Router()

//desc:     Login/Landing page
//route:    Get /
router.get("/", (req, res) => {
    res.render("login", {
        layout: "login"
    })
})

//desc:     Dashboard
//route:    Get /dashboard
router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

//desc:     Register
//route:    Get /register
router.get("/register", (req, res) => {
    res.render("register", {
        layout: "login"
    })
})


module.exports = router