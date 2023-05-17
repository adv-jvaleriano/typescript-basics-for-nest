
import { PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    
    constructor(
        private readonly _id: number, 
        private _name: string,
        private readonly http: PokeApiAdapter
    ) {}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this._id}`)
        console.log(data.moves);
        
        const moves: Move[] = data.moves
        return moves
    }

}

export const pikachu = new Pokemon(1, "Pikachu", new PokeApiAdapter())

pikachu.getMoves();
