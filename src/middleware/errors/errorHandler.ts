import { Request, Response } from "express";

function errorHandler(err: any, req: Request, res: Response, next: (arg0: any) => void): void {
  // tslint:disable-next-line:no-console
  console.log("errorHandler", typeof err);
  // next(err);
  res.status(500).json("error");
}

export default errorHandler;