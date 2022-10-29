"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.get('/', (req, res) => { res.send("hello this is route"); });
router.post('/register', user_1.register);
router.post('logIn', user_1.logIn);
exports.default = router;
//# sourceMappingURL=user.js.map