const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const cookieParser = require("cookie-parser");

//Routes Imports
const postsRoutes = require('./Routes/postRoutes.js');
const solutionsRoutes = require("./Routes/solutionRouter.js");
const commentsRoutes = require("./Routes/commentsRoutes.js");
const apiRoutes = require("./Routes/loginSignupRoutes.js");
const userRoutes = require("./Routes/userRoutes.js");

const app = express();

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin:["http://localhost:3000"],
  credentials: true,
}))

const API_VERSION = process.env.API_VERSION || "v1";

//routes
app.use(`/api/${API_VERSION}`, apiRoutes);
app.use(`/api/${API_VERSION}/users`,userRoutes);
app.use(`/api/${API_VERSION}/posts`,postsRoutes);
app.use(`/api/${API_VERSION}/solutions`,solutionsRoutes);
app.use(`/api/${API_VERSION}/comments`,commentsRoutes);

//port
const PORT = process.env.ENV_PORT || 8000;

//database and server connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.log("There was an error connecting to database");
  });



  //Implement rate limiting