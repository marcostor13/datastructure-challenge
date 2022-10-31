import { Request, Response } from 'express'
import * as fs from 'fs';
import { IInput } from '../interfaces/pipeline.interfaces';
import { IOutput } from './../interfaces/pipeline.interfaces';

export const pipeline = async (req: Request, res: Response) => {

  fs.readFile('./../datastructure-challenge/input.json', (err, data)=>{
    if(err) return res.status(501).json({
      message: `Error al ejecutar pipeline`,
      data: err
    })
    let dataFile: IInput = JSON.parse(String(data))
    let output: IOutput[] = []
    dataFile.cities.map(d=>{
      const i = output.findIndex(o=>o.wather.id === d.weather[0].id)
      if(i>-1){
        output[i].cities = [...output[i].cities, d]
      }else{
        output = [...output, {
          wather: d.weather[0],
          cities: [d]
        }]
      }
    })
    fs.writeFile('./output.json', JSON.stringify(output), (err)=>{
      if(err) return res.status(501).json({
        message: `Error al ejecutar pipeline`,
        data: err
      })
      return res.status(200).json({
        message: `Pipeline completado`
      })
    })
  })   
  
}
