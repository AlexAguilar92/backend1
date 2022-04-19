import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class PokemonRepository {
  sayHello(): string {
    return 'Hello, world!';
  }
}