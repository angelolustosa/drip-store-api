import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

//https://expressjs.com/en/resources/middleware/cors.html
app.use(cors())

export default app.use(
  express.urlencoded({
    extended: true,
  })
);

routes(app)
app.use(morgan('combined'))
