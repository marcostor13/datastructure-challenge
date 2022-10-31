import * as fs from 'fs';
import { IResponse } from '../interfaces/general.interface';

export const readFile = async (route: string): Promise<IResponse> => {
    try {
        const data = await fs.readFileSync('./input.json')
        console.log('data', data)
        if(data){
            return {
                message: '',
                data
            }
        }else{
            return {
                message: 'No se encontró datos'                
            }
        }
    } catch (error) {
        return {
            message: 'Error al leer el archivo',
            error: error
        }
    }
}