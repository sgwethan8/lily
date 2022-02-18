var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const fs = require("fs");
var indexRouter = require("./routes/index");
var shiftsRouter = require("./routes/shifts");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

/* GET shifts page. */
app.get("/shifts", (req, res) => {
  fs.readFile("./data/shifts.json", "utf8", (err, jsonString) => {
    if (err) throw err;
    res.send(jsonString);
  });
});

/* POST shifts page. */
app.post("/shifts", function (req, res) {
  if (!Object.entries(req.body).length > 0) {
    res.status(204);
    res.send("No content sent.");
  } else {
    fs.writeFile("./data/shifts.json", JSON.stringify(req.body), (err) => {
      // Checking for errors
      if (err) throw err;
      res.status(200);
      res.send("Content received.");
    });
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
