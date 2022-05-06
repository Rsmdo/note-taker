const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});


router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// catch all to direct back to index
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//done

module.exports = router;