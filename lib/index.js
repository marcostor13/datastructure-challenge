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
exports.server = void 0;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const pipeline_routes_1 = require("./routes/pipeline.routes");
const fs = require("fs");
const https = require("https");
const path = require("path");
const key = fs.readFileSync(path.resolve('src/cert/cert.key'), 'utf8');
const cert = fs.readFileSync(path.resolve('src/cert/cert.pem'), 'utf8');
const app = express();
exports.server = https.createServer({ key: key, cert: cert }, app);
//Setting
app.set('port', 3004);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: true
}));
//middlewares
app.use(morgan('dev'));
//Routes
app.use(pipeline_routes_1.default);
//LOCAL
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        exports.server.listen(app.get('port'));
        console.log('Server on port ', app.get('port'));
    });
}
main();
exports.default = app;
//# sourceMappingURL=index.js.map