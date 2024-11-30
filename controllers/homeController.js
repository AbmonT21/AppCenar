exports.GetHome = (req, res, next) => {
    res.render("HomePages/homeClient", { 
        pageTitle: "AppCenar",
        layout:"main-layout",
        activePage: "home",
        url1:"/pedidos",nameurl1:"Mis Pedidos",
        url2:"/favoritos",nameurl2:"Mis Direcciones",
        url3:"/direcciones",nameurl3:"Mis Favoritos",
    });
  };
  