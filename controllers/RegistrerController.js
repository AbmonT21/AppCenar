exports.GetRegistrer = (req, res, next) => {
    res.render("SingOut/Registrer", { 
        pageTitle: "Nueva Cuenta",
        layout: "LayoutBack",
        link: "/Login" 
    });
  };
  