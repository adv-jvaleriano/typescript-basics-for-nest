import axios from 'axios'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class PokeApiAdapter {

    private readonly _axios = axios

    async get<T>(url: string): Promise<T> {
        const { data } = await this._axios.get<T>(url)
        return data
    }

    async post(url: string, data: any) {

    }

    async patch(url: string, data: any) {

    }

    async delete(url: string) {

    }
}