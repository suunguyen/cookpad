require("dotenv").config();
const express = require("express");
const cors = require("cors");

const route = require("./routes");
const ConnectToDatabase = require("./configs/ConnectToDB");

ConnectToDatabase();

const app = express();
app.use("/assets/img", express.static("assets/img"));
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    limit: '50mb'
}));
app.use(cors());

route(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));