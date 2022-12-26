require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const swaggerUI = require('swagger-ui-express')
const apiDocumentation = require('./apidocs.json')

app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(apiDocumentation))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
