import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import dotenv from 'dotenv';

//config
dotenv.config();
const SECRET = process.env.SECRET_KEY as string;

// verification
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body; // pega infos

        const user = await User.findOne({ email }); // encontra user
        if (!user) {
            // verifica user
            return res.status(401).json({ success: true, message: 'Usuario Não Encontrado!' });
        }
        const passwordVerify = await bcrypt.compare(password, user.password); // verifica password
         console.log(user.password); //
        if (!passwordVerify) {
            return res
                .status(401).
                json({ success: true, message: 'Senha Incorreta!' });
        }

        const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '1h' });
        return res
            .status(200)
            .json({ success: true, message: 'Login efetuado com sucesso!', token })
    } catch (error) {
        return res.json({ success: false, error });
    }
};
