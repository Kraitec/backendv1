const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require("./src/user/routes");
const entityRoutes = require("./src/entity/routes");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);
app.use("/api/entity", entityRoutes);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
