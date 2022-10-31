"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pipeline_controller_1 = require("../controllers/pipeline.controller");
const router = (0, express_1.Router)();
const service = 'file';
router.get(`/${service}-pipeline`, pipeline_controller_1.pipeline);
exports.default = router;
//# sourceMappingURL=pipeline.routes.js.map