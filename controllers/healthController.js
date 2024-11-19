exports.GetHealth = (req, res, next) => {
    res.render("PagesClient/health", { 
        pageTitle: "AppCenar",
        layout:"LayoutBack",
        link:"/Home"
    });
  };
  