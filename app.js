const express = require("express");
const cors = require("cors");
const API_ROUTER = require("./route/api-route");
const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true //-> allows to send nested object
  })
);


app.use(express.json()); //-> display the data in json [imp];
app.use("/api", API_ROUTER);
app.listen(8000, () => {
  console.log("server started at port 8000");
});
