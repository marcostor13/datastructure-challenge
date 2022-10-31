"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeline = void 0;
const fs = require("fs");
const pipeline = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    fs.readFile('./../datastructure-challenge/input.json', (err, data) => {
        if (err)
            return res.status(501).json({
                message: `Error al ejecutar pipeline`,
                data: err
            });
        let dataFile = JSON.parse(String(data));
        let output = [];
        dataFile.cities.map(d => {
            const i = output.findIndex(o => o.wather.id === d.weather[0].id);
            if (i > -1) {
                output[i].cities = [...output[i].cities, d];
            }
            else {
                output = [...output, {
                        wather: d.weather[0],
                        cities: [d]
                    }];
            }
        });
        fs.writeFile('./output.json', JSON.stringify(output), (err) => {
            if (err)
                return res.status(501).json({
                    message: `Error al ejecutar pipeline`,
                    data: err
                });
            return res.status(200).json({
                message: `Pipeline completado`
            });
        });
    });
});
exports.pipeline = pipeline;
//# sourceMappingURL=pipeline.controller.js.map