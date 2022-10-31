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
exports.readFile = void 0;
const fs = require("fs");
const readFile = (route) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fs.readFileSync('./input.json');
        console.log('data', data);
        if (data) {
            return {
                message: '',
                data
            };
        }
        else {
            return {
                message: 'No se encontró datos'
            };
        }
    }
    catch (error) {
        return {
            message: 'Error al leer el archivo',
            error: error
        };
    }
});
exports.readFile = readFile;
//# sourceMappingURL=data.controller.js.map