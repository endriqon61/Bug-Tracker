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
exports.logIn = exports.register = void 0;
const user_1 = require("../model/user");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fullName, password } = req.body;
    try {
        if (yield user_1.User.findOne({ email: email })) {
            return res.json({ message: "email already exists" }).status(300);
        }
        const user = new user_1.User();
        user.fullName = fullName;
        user.email = email;
        user.password = password;
        yield user.save();
        return res.json({ message: 'account created succesfully' }).status(200);
    }
    catch (error) {
        return res.json({ message: 'internal server error' }).status(500);
    }
});
exports.register = register;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ email: email });
        if (!user) {
            return res.json({ message: "there is no account with that email" }).status(404);
        }
        if (user.password !== password) {
            return res.json({ message: "password is incorrect" }).status(401);
        }
        return res.json({ message: "logged in", token: "hf320f12hASDh0121d2" }).status(200);
    }
    catch (err) {
        return res.json({ message: "internal server error" }).status(500);
    }
});
exports.logIn = logIn;
//# sourceMappingURL=user.js.map