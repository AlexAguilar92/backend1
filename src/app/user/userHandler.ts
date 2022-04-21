import express, { Router, Request, Response } from 'express';
import { UserRepository } from '../../repository';
import IUserRepository from '../../repository/user/interface/IUserRepository';

const router: Router = express.Router();

const iUserRepository: IUserRepository = new UserRepository();

router.get('/user/:id', (req: Request, res: Response) => {

  const { id } = req.params;

  const user = iUserRepository.findById(id as string);

  res.status(200).send(user);

});

router.get('/user', (req: Request, res: Response) => {

  const user = iUserRepository.find();

  res.status(200).send(user);

});

router.post('/user', async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const createdUser = await iUserRepository.create(user);

    res.status(201).send(createdUser);
  } catch (error) {
    res.status(500).send("error")
  }

});

router.put('/user', (req: Request, res: Response) => {

  res.send('put user');
});

router.patch('/user', (req: Request, res: Response) => {

  res.send('patch user');
});

router.delete('/user', (req: Request, res: Response) => {

  res.send('delete user');
});

export default router;