exports.GetRecover = (req, res, next) => {
    res.render("forget/forgetAccount", { 
        pageTitle: "Contraseña olvidada",
        layout:"LayoutBack",
        link:"/Login"
    });
  };
  