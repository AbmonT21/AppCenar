exports.GetFavoritos = (req, res, next) => {
    res.render("PagesClient/MisFavoritos", { 
        pageTitle: "AppCenar",
        layout:"main-layout",
        link:"/Home"
    });
  };
  