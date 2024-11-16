exports.GetHome = (req, res, next) => {
    res.render("HomePages/homeClient", { 
        pageTitle: "AppCenar",
        layout:"main-layout"
    });
  };
  