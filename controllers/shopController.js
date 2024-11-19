exports.GetShop = (req, res, next) => {
    res.render("PagesClient/shopping", { 
        pageTitle: "AppCenar",
        layout:"LayoutBack",
        link:"/Home"
    });
  };
  