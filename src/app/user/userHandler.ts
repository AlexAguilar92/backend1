import express, { Router, Request, Response } from 'express';
import Joi from 'joi';
import {
  // Use this as a replacement for express.Request
  ValidatedRequest,
  // Creates a validator that generates middlewares
  createValidator
} from 'express-joi-validation';
import { UserRepository } from '../../repository';
import IUser from '../../repository/entities/interface/IUser';
import IUserRepository from '../../repository/user/interface/IUserRepository';
import { paramsSchema, UserGetByIdSchema } from './schemas/userGetByIdSchema';
import { IUserUseCase, UserUseCase } from '../../useCase';
import { IUserAdapter, UserAdapter } from '../../adapter';
import IUserDTO from '../../adapter/DTO/IUserDTO';

const router: Router = express.Router();

const validator = createValidator();

router.get('/user/:id', validator.params(paramsSchema),
async (req: ValidatedRequest<UserGetByIdSchema>, res: Response, next) => {
  const iUserAdapter: IUserAdapter = new UserAdapter();
  try {
    const { id }: { [key: string]: string } = req.params;

    const user: IUserDTO = await iUserAdapter.findById(id as string);
    // tslint:disable-next-line:no-console
    console.info(`Found user with id ${id}`, user);

    res.status(200).send(user);
  } catch (error) {
    next(new Error("hola"));
  }
});

router.get('/user', async (req: Request, res: Response) => {
  const iUserAdapter: IUserAdapter = new UserAdapter();
  
  const users: IUserDTO [] = await iUserAdapter.find();

  res.status(200).send(users);

});

router.post('/user', async (req: Request, res: Response) => {
  const iUserUseCase: IUserUseCase = new UserUseCase();

  try {
    const user: IUser = req.body;

    const createdUser = await iUserUseCase.create(user);

    res.status(201).send(createdUser);
  } catch (error) {
    res.status(500).send("error");
  }

});

router.put('/user', (req: Request, res: Response) => {
  const iUserRepository: IUserRepository = new UserRepository();
  res.send('put user');
});

router.patch('/user', (req: Request, res: Response) => {
  const iUserRepository: IUserRepository = new UserRepository();
  res.send('patch user');
});

router.delete('/user', (req: Request, res: Response) => {
  const iUserRepository: IUserRepository = new UserRepository();
  res.send('delete user');
});

export default router;