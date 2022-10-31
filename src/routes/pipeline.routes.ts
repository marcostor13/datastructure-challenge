import { Router } from "express"
import { pipeline } from '../controllers/pipeline.controller';

const router = Router()
const service = 'file'

router.get(`/${service}-pipeline`, pipeline)

export default router