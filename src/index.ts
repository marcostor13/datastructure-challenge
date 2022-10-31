import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import generalRouter from './routes/pipeline.routes'

import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

const key = fs.readFileSync(path.resolve('src/cert/cert.key'), 'utf8')
const cert = fs.readFileSync(path.resolve('src/cert/cert.pem'), 'utf8')
const app: express.Application = express()
export const server = https.createServer({ key: key, cert: cert }, app);


//Setting

app.set('port', 3004)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin : true
}))

//middlewares
app.use(morgan('dev'))

//Routes
app.use(generalRouter)

//LOCAL
async function main() {
    server.listen(app.get('port'))
    console.log('Server on port ', app.get('port'))
}

main()
export default app

