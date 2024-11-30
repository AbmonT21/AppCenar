exports.GetDrink = (req, res, next) => {
    res.render("PagesClient/drink", { 
        pageTitle: "AppCenar",
        layout:"LayoutBack",
        link:"/Home"
    });
  };
  