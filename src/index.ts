import express, { Express, Request, Response } from "express";
import { routes } from "./app";
const app: Express = express();
const port: number = 8000; // default port to listen

app.use('/', routes);

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );