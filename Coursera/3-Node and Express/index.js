const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;
const hostname = "localhost";

app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/dishes", (req, res) => {
  res.end("Displaying all the dishes");
});

app.post("/dishes", (req, res) => {
  res.end(
    "Will add the new dish: " +
      req.body.dish +
      " with details : " +
      req.body.description
  );
});

app.put("/dishes", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation is not possible on /dishes");
});

app.delete("/dishes", (req, res) => {
  res.end("Deleting all the dishes");
});

app.get("/dishes/:dishId", (req, res) => {
  res.end("Displaying the dish with id : " + req.params.dishId);
});

app.post("/dishes/:dishId", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation is not supported on /dishes/" + req.params.dishId);
});

app.put("/dishes/:dishId", (req, res) => {
  res.write("Editing the dish with ID : " + req.params.dishId + "\n");
  res.end(
    "Will update the dish: " +
      req.body.dish +
      " with details : " +
      req.body.description
  );
});

app.delete("/dishes/:dishId", (req, res) => {
  res.end("Deleting all the dish with ID : " + req.params.dishId);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server Up and Running at http://${hostname}:${port}`);
});
