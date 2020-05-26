const leaderRouter = require("express").Router();
const bodyParser = require("body-parser");

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Displaying all the leaders");
  })
  .post((req, res) => {
    res.end(
      "Will add the new leader: " +
        req.body.leader +
        " with details : " +
        req.body.description
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation is not possible on /leaders");
  })
  .delete((req, res) => {
    res.end("Deleting all the leaders");
  });
leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      "Will send details of the leader: " + req.params.leaderId + " to you!"
    );
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /leaders/" + req.params.leaderId);
  })
  .put((req, res) => {
    res.write("Updating the leader: " + req.params.leaderId + "\n");
    res.end(
      "Will update the leader: " +
        req.body.leader +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res) => {
    res.end("Deleting leader: " + req.params.leaderId);
  });

module.exports = leaderRouter;
