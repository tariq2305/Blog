const { Router } = require("express");
const { getFacultylist } = require("../controllers/blogControllers");

const router = Router();
router.get("/posts",getFacultylist);
router.post("/newposts");
router.put("/posts/:id");
router.delete("/posts/:id");
router.get("/posts/:id");

module.exports = router;
