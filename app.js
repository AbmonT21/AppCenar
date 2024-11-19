const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();

const NotFoundController = require("./controllers/NotFoundController");
const LoginController = require("./controllers/LoginController");
const RegistrerController = require("./controllers/RegistrerController");
const RegistrerMarketController = require("./controllers/RegistrerMarketController");
const forgetAccountController = require("./controllers/forgetAccountController");
const homeController = require("./controllers/homeController");
const drinkController = require("./controllers/drinkController");
const restaurantController = require("./controllers/restaurantController");
const shopController = require("./controllers/shopController");
const healthController = require("./controllers/healthController");
const marketController = require("./controllers/marketController");
const MisPedidosController = require("./controllers/MisPedidosController");
const MisDireccionesController = require("./controllers/MisDireccionesController");
const MisFavoritosController = require("./controllers/MisFavoritosController");



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
app.use("/forget",forgetAccountController.GetRecover);
app.use("/restaurant",restaurantController.GetRestaurant);
app.use("/shop",shopController.GetShop);
app.use("/market",marketController.GetMarket);
app.use("/drink",drinkController.GetDrink);
app.use("/health",healthController.GetHealth);
app.use("/pedidos",MisPedidosController.GetPedidos);
app.use("/favoritos",MisFavoritosController.GetFavoritos);
app.use("/direcciones",MisDireccionesController.GetDirecciones);
app.use("/Home",homeController.GetHome);

app.use(NotFoundController.Get404);


app.listen(5001)