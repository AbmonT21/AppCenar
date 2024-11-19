exports.GetMarket = (req, res, next) => {
    res.render("PagesClient/market", { 
        pageTitle: "AppCenar",
        layout:"LayoutBack",
        link:"/Home"
    });
  };
  