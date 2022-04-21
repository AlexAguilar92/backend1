import express, { Express } from "express";
import { userRoutes } from "./app";
import dotenv from 'dotenv'
import notFoundHandler from "./middleware/errors/notFoundHandler";
import errorHandler from "./middleware/errors/errorHandler";
const app: Express = express();
const port: number = 8000; // default port to listen

// Loads env files into process.env
dotenv.config();

// Parses incoming data to JSON
app.use(express.json());

// User handlers
app.use('/', userRoutes);

// Undefined routes handler
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );