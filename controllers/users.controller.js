import { UserModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const login = async(req, res)=>{
    try {
        const { email, password } = req.body
        const user = await UserModel.findOneByEmail(email);

        if(!user){
            throw {
                code: 400,
                msg: "El email no esta registrado!"
            };
        }

        if(password != user.password){
            throw {
                code: 401,
                msg: "Contraseña invalida!"
            };
        }

        const token = jwt.sign(
            { email: user.email },
            process.env.SECRET_JWT,
            {expiresIn: '2m'}
        );
        res.cookie('token', token, { httpOnly: true });
        return res.json({token, email: user.email});
    } catch (error) {
        console.error(error);
        const { code, msg} = error
        return res.status(code).json({ ok: false, msg});
    }
}

export const UserController = {
    login
}