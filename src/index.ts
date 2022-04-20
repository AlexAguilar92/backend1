import express, { Express } from "express";
import { userRoutes } from "./app";
import dotenv from 'dotenv'
const app: Express = express();
const port: number = 8000; // default port to listen

dotenv.config();

app.use(express.json());

app.use('/', userRoutes);

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );