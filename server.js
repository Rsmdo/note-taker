const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);//to route to correct folder



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

//done