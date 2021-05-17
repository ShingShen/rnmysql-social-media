const express = require("express");
const app = express();

// start at 3001, because npm start always at 3000 
app.listen(3001, (req, res) => {
    console.log("Server running...")
});