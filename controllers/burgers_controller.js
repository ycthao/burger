let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.create([
        "waiting", "devoured"
    ], [
        req.body.name, req.body.devour
    ], function(result) {
        res.json({ id: result.insertId });
    });
});



module.export = router;