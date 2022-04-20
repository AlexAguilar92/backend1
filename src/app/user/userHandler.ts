import express, { Router, Request, Response } from 'express';
import { UserRepository } from '../../repository';

const router: Router = express.Router();

const userRepository: UserRepository = new UserRepository();

router.get('/user/:id', (req: Request, res: Response) => {

  const { id } = req.params;

  const user = userRepository.findById(id as string);

  res.status(200).send(user);

});

router.get('/user', (req: Request, res: Response) => {

  const user = userRepository.find();

  res.status(200).send(user);

});

router.post('/user', (req: Request, res: Response) => {
  try {
    const user = req.body;
    // tslint:disable-next-line:no-console
    console.log(req.body);
    const createdUser = userRepository.create(user);

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