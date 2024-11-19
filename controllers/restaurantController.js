exports.GetRestaurant = (req, res, next) => {
    res.render("PagesClient/Restaurant", { 
        pageTitle: "AppCenar",
        layout:"LayoutBack",
        link:"/Home"
    });
  };
  