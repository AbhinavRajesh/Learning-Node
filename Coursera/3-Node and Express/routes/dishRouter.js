const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Displaying all the dishes");
  })
  .post((req, res) => {
    res.end(
      "Will add the new dish: " +
        req.body.dish +
        " with details : " +
        req.body.description
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation is not possible on /dishes");
  })
  .delete((req, res) => {
    res.end("Deleting all the dishes");
  });

module.exports = dishRouter;
