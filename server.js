var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT;
var multer = require('multer');
var upload = multer();

app.get("/", function(req, res, next) {
        res.render("index", {});
    });

app.post('/size', upload.single('file'), (req,res) => {
  res.send({size: req.file.size});
});

app.engine("html", require("hogan-express"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public")));



app.listen(PORT, function() {
    console.log("Server running on PORT " + PORT);
});