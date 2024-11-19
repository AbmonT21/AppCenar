exports.GetPedidos = (req, res, next) => {
    res.render("PagesClient/MisPedidos", { 
        pageTitle: "AppCenar",
        layout:"main-layout",
        link:"/Home"
    });
  };
  