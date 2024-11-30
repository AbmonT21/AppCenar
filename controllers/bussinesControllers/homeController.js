exports.GetBussines = (req, res, next) => {
    res.render("homePages/homeBussines", { 
        pageTitle: "Negocio",
        layout:"main-layout",
        link:"/Bussines",
        url1:"/pedidos",nameurl1:"Mis Pedidos",
        url2:"/favoritos",nameurl2:"Mis Direcciones",
        url3:"/direcciones",nameurl3:"Mis Favoritos",
    });
  };
  