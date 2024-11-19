const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();

const NotFoundController = require("./controllers/NotFoundController");
const LoginController = require("./controllers/LoginController");
const RegistrerController = require("./controllers/RegistrerController");
const RegistrerMarketController = require("./controllers/RegistrerMarketController");

const homeController = require("./controllers/homeController");


app.engine(
    "hbs",
    engine({
      layoutsDir: "views/layouts/",
      defaultLayout: "layout",
      extname: "hbs",
    })
  );

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/Login",LoginController.GetLogin);
app.use("/Registrer",RegistrerController.GetRegistrer);
app.use("/RegistrerMarket",RegistrerMarketController.GetRegistrer);
app.use("/Home",homeController.GetHome);
app.use(NotFoundController.Get404);


app.listen(5001)