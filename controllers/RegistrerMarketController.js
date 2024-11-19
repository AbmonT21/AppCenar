exports.GetRegistrer = (req, res, next) => {
    res.render("SingOut/RegistrerMarket", { 
        pageTitle: "Nueva Empresa",
        layout: "LayoutBack",
        link: "/Login" 
    });
  };
  