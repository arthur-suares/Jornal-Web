import express from "express";
import userRoute from "./src/routes/user-rout.js";

const app = express();

app.use("/soma", userRoute)

app.listen(3000, () => {
    console.log("Servidosr esciantdo");
});

