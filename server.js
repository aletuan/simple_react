const express = require('express');

const app = express();

// use static middleware
app.use(express.static("static"));

app.listen(3000, function () {
    console.log("App started on port 3000");
});