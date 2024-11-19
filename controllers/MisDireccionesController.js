exports.GetDirecciones = (req, res, next) => {
    res.render("PagesClient/MisDirecciones", { 
        pageTitle: "AppCenar",
        layout:"main-layout",
        link:"/Home"
    });
  };
  