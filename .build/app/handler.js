"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PokemonRepository_1 = __importDefault(require("../repository/PokemonRepository"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const pokemonRepository = new PokemonRepository_1.default();
    res.send(pokemonRepository.sayHello());
});
exports.default = router;
//# sourceMappingURL=handler.js.map