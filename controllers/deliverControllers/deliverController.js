exports.GetDeliver = (req, res, next) => {
    res.render("homePages/homeDeliver", { 
        pageTitle: "Delivery",
        layout:"main-layout",
        link:"/Deliver"
    });
  };
  