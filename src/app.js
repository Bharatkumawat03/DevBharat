const express = require('express');

const  app = express();

// app.use("/", (req,res) => {
//     res.send("Hello bharat");
// });

app.use("/home", (req,res) => {
    res.send("Home");
});

app.use("/test", (req,res) => {
    res.send("testing");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});
