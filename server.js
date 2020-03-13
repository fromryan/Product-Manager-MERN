const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");
require('./server/routes/product.routes')(app);






// This is where we import the users routes function from our user.routes.js file
// const AllMyUserRoutes = require("./server/routes/user.routes");
// AllMyUserRoutes(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
});