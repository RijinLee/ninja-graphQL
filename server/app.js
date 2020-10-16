const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allows requests from other servers
app.use(cors());

// connect to db
mongoose.connect(
  "mongodb+srv://rijin:test123@cluster0.a4wj2.mongodb.net/graphql-ninja?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

// telling express to use this schema to map out the graph
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`Listening for requests on port 4000`);
});
