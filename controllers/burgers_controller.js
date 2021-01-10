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
        "waiting", "devour"
    ], [
        req.body.name, req.body.devour
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    burger.update({
        devour: req.body.devour
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