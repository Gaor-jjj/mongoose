import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import stringsController from "./controllers/strings";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://kaur:salauss@cluster0.5i3um.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app: Express = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', articleController);
app.use('/', commentController);
app.use('/', authorController);

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});