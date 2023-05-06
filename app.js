//jshint esversion : 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var newItems = [];
app.set("view engine", "ejs"); //sets the view engine to ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  // var currentDay = today.getDay();
  // var day = "";
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;

  //   default:
  //     break;
  // }
  res.render("list", {
    kindOfday: day,
    newListItems: newItems,
  }); /*here we are rendering the file list.ejs(must be in a folder called views acc to ejs documentation) 
        and going through it to find the key by the name of kindOfday(marker) in order to replace it with the value of the variable day.*/
});
app.post("/", function (req, res) {
  var newItem = req.body.newItem;
  // console.log(newItem);
  newItems.push(newItem);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
