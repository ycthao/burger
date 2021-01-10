let express = require("express");

let router = express.Router();

let burgerjs = require("../models/burger.js");

router.get("/", function(req, res) {
    burgerjs.all(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burgerjs.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    burgerjs.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export router
module.export = router;