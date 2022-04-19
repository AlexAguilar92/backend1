import express, { Router } from 'express';
import PokemonRepository from '../repository/PokemonRepository';


const router: Router = express.Router();

router.get('/', (req, res) => {
  const pokemonRepository = new PokemonRepository();

  res.send(pokemonRepository.sayHello());
});

export default router;