const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  path = require("path"),
  Food = require("./models/food.model"),
  Money = require("./models/money.model"),
  Feedback = require("./models/feedback.model"),
  User = require("./models/user.model"),
  Admin = require("./models/admin.model");

require("dotenv").config();
app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public"))); //linking stylesheet
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
);
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to MONGO");
});
var message = "";
var logU = false;
var logA = false;

app.get("/index", function (req, res) {
  message = "";
  res.sendFile("views/index.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/index.html", function (req, res) {
  message = "";
  res.sendFile("views/index.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/", function (req, res) {
  message = "";
  res.sendFile("views/index.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/about", function (req, res) {
  res.sendFile("views/about.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/contact", function (req, res) {
  res.sendFile("views/contact.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/donate", function (req, res) {
  res.sendFile("views/donate.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/login.html", function (req, res) {
  logA = false;
  logU = false;
  res.sendFile("views/login.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/login", function (req, res) {
  logA = false;
  logU = false;
  res.render(__dirname + "/views/login.html", { message: message });
  // res.sendFile('views/login.html', {
  //     root: path.join(__dirname, './')
  // })
});
app.get("/admin", function (req, res) {
  var foodi;
  var money;
  if (logA) {
    Food.find({}, function (err, food) {
      try {
        // console.log(food);
        Money.find({}, function (err, money) {
          try {
            Feedback.find({}, function (err, feedback) {
              try {
                res.render(
                  __dirname + "/views/admin.html",
                  { food: food, money: money, feedback: feedback },
                );
              } catch (err) {
                console.log(err);
              }
            });
          } catch (err) {
            console.log(err);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
    // res.render(__dirname + "/views/admin.html", { food: food });
  } else res.redirect("/login");
});
app.get("/user", function (req, res) {
  if (logU) {
    res.sendFile("views/user.html", {
      root: path.join(__dirname, "./"),
    });
  } else res.redirect("/login");
});
app.get("/sign", function (req, res) {
  res.sendFile("views/signup.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/articles", function (req, res) {
  res.sendFile("views/articles.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/pt1.html", function (req, res) {
  res.sendFile("views/pt1.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/pt2.html", function (req, res) {
  res.sendFile("views/pt2.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/pt3.html", function (req, res) {
  res.sendFile("views/pt3.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/pt4.html", function (req, res) {
  res.sendFile("views/pt4.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/pt5.html", function (req, res) {
  res.sendFile("views/pt5.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/pt5.html", function (req, res) {
  res.sendFile("views/pt5.html", {
    root: path.join(__dirname, "./"),
  });
});
app.get("/thank.html", function (req, res) {
  res.sendFile("views/thank.html", {
    root: path.join(__dirname, "./"),
  });
});

app.post("/login", function (req, res) {
  User.create(req.body.user, function (err, user) {
    console.log(user);
    try {
      console.log(user);
      logU = true;
      name = user.first_name;
      res.redirect("/user");
    } catch (err) {
      console.log(err);
    }
  });
});
app.post("/donate", function (req, res) {
  console.log(req.body.user);
  Money.create(req.body.user, function (err, user) {
    // console.log(user);
    try {
      console.log(user);
      res.redirect("/thank.html");
    } catch (err) {
      console.log(err);
    }
  });
});
app.post("/user/food", function (req, res) {
  var foods = [];
  console.log("name " + req.body.name);
  for (var i = 0; i < req.body.food.length; i++) {
    foods[i] = { type: req.body.food[i].type, qty: req.body.food[i].qty };
  }
  var foodk = {
    name: req.body.name,
    food: foods,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    number: req.body.number,
  };
  Food.create(foodk, function (err, user) {
    try {
      console.log(user);
      res.redirect("/thank.html");
    } catch (err) {
      console.log(err);
    }
  });
});
app.post("/contact", function (req, res) {
  Feedback.create(req.body.user, function (err, user) {
    try {
      console.log(user);
      res.redirect("/thank.html");
    } catch (err) {
      console.log(err);
    }
  });
});

app.post("/user", function (req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    // console.log(err);
    // console.log(user);
    try {
      if (user.password == req.body.password) {
        logU = true;
        message = "";
        res.redirect("/user");
      } else {
        res.redirect("/login");
        message = "Invalid Password";
      }
    } catch (err) {
      res.redirect("/login");
      message = "Invalid Username";
    }
  });
});
app.post("/admin", function (req, res) {
  Admin.findOne({ username: req.body.username }, function (err, admin) {
    // console.log(err);
    // console.log(user);
    try {
      if (admin.password == req.body.password) {
        logA = true;
        res.redirect("/admin");
      } else {
        res.redirect("/login");
      }
    } catch (err) {
      res.redirect("/login");
    }
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Listening to feedIndia " + port);
});
