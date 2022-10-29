import { User } from '../model/user'
import { Request, Response } from 'express';
import { isGeneratorFunction } from 'util/types';

const register = async(req: Request, res: Response):Promise<Response> => {

    const { email, fullName, password } = req.body;
    try {
        if(await User.findOne({email: email})) {
            return res.json({message: "email already exists"}).status(300)
        }
        const user = new User();
        user.fullName = fullName;
        user.email = email;
        user.password = password;
        await user.save(); 
        return res.json({message: 'account created succesfully'}).status(200);
    
    } catch(error) {
        
        return res.json({message: 'internal server error'}).status(500)

    }
}

const logIn = async(req: Request, res: Response):Promise<Response> => {

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({email: email})
        if(!user) {
            return res.json({message: "there is no account with that email"}).status(404)
        } 
        if(user.password !== password) {
            return res.json({message: "password is incorrect"}).status(401)
        }
        return res.json({message: "logged in", token: "hf320f12hASDh0121d2"}).status(200)
        
    } catch(err) { 
        
        return res.json({message: "internal server error"}).status(500)

    }
}

export {register, logIn}