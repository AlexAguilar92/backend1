import { Request, Response } from 'express'

const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json("No encontrado");
}

export default notFoundHandler;