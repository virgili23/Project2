// Require Path NPM Package
var path = require("path");

module.exports = function(app) {
    // HTML GET Requests - below code handles when users "visit" a page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    });
    
};

// We put our html in our views file