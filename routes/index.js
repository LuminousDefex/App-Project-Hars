const express = require("express")
const passport = require("passport")
const router = express.Router()
const { ensureAuthenticated, ensureGuest } = require("../config/auth")
const { getExternalIP } = require("../config/ipGet")
const getUserIsp = require("../config/ispGet")
const getHeapMapData = require("../config/getHeatMapData")


const Data = require("../models/Data")
const GeoData = require("../models/GeoData")

//desc:     Login/Landing page
//route:    Get /
router.get("/", ensureGuest, (req, res) => {
    res.render("login")
})

//desc:     Dashboard
//route:    Get /dashboard
router.get("/dashboard", ensureAuthenticated, async (req, res) => {
    try {
        const userData = await Data.find({ user: req.user.id }).lean()
        if (userData != "") {
            const heatmapData = await getHeapMapData(req);
            res.render("dashboard", {
                user: req.user,
                layout: "layoutUser",
                userData,
                heatmapData,
                helper: require("../helpers/helper"),
                title: "Express"
            })
        } else {
            res.render("dashboard", {
                user: req.user,
                layout: "layoutUserNoScript",
                userData,
                helper: require("../helpers/helper"),
                title: "Express"
            })
        }

    } catch (err) {
        console.error(err)
        res.render("error/500")
    }
})

// desc:     Data Upload
// route:    Post /dashboard
router.post("/dashboard", ensureAuthenticated, async (req, res) => {
    try {
        // set upload to true for data upload
        let upload = true;
        let uploadGeo = true;
        const { result } = req.body;

        // get public userIp
        const userAddress = await getExternalIP();
        // get userIsp from publicIp
        const userIsp = await getUserIsp(userAddress);

        //preparing json
        jsonString = result;
        myJson = JSON.parse(jsonString);
        const docs = []; // {user: , userJson: {}}
        for (let i = 0; i < myJson.length; i++) {
            let entry = {
                user: req.user.id,
                userIsp: userIsp,
                userJson: myJson[i]
            };
            docs.push(entry);
        }

        if (upload) {
            await Data.create(docs)
        }

        // get heatmap data from scripts and upload to db
        // const heatmapData = await getHeapMapData(req);
        // let heatmapDataString = JSON.stringify(heatmapData);
        // let entry = {
        //     geoData: heatmapDataString
        // }
        // if (uploadGeo) {
        //     await GeoData.create(entry);
        // }

        res.redirect("/dashboard")
    } catch (err) {
        console.error(err)
        res.render("error/500")
    }
})


// Login
router.post("/", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/",
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/");
})


module.exports = router