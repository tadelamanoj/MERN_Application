require("dotenv").config();
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const express = require("express");
const cors =require("cors")
const app = express();
const auth = require("./src/routes/auth")
const users = require("./src/routes/users")
const bodyParser = require('body-parser');
let gfs;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

app.use("/file",auth);
app.use("/file",users)
// media routes
app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res)
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
