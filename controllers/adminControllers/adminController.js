exports.GetAdmin = (req, res, next) => {
    res.render("homePages/homeAdmin", { 
        pageTitle: "Administrador",
        layout:"main-Layout",
        link:"/Admin",
        url1:"#",nameurl1:"Administrar Negocios",
        url2:"#",nameurl2:"Administrar Deliverys",
        url3:"#",nameurl3:"Administrar Clientes",
    });
  };
  