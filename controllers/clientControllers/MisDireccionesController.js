exports.GetDirecciones = (req, res, next) => {
    res.render("PagesClient/MisDirecciones", { 
        pageTitle: "AppCenar",
        layout:"main-layout",
        link:"/Home",
        url1:"/pedidos",nameurl1:"Mis Pedidos",
        url2:"/favoritos",nameurl2:"Mis Direcciones",
        url3:"/direcciones",nameurl3:"Mis Favoritos",
    });
  };
  