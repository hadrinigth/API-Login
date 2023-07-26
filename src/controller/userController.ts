import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';

export const View = async (req: Request, res: Response) => {
    const user = await User.find({});
    res.json(user);
    console.log(user);
};
export const Create = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        // Verificar se o usuário já existe no banco de dados
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Usuário já existe.' });
        }

        // Usar bcrypt para criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });

        await newUser.save();
        res.json({ success: true, user: newUser });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};

export const Update = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        if (userId === null) {
            console.log('Update: ID do usuário inválido.');
            return res.status(400).json({ success: false, error: 'ID do usuário inválido.' });
        }

        const user = await User.findByIdAndUpdate(userId, updateData, { runValidators: true, new: true });
        console.log('Update: user:', user);
        res.json({ success: true, user });
    } catch (error) {
        console.log('Update: Erro:', error);
        res.json({ success: false, error: error });
    }
};

export const Remove = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        if (userId === undefined) {
            console.log('Remove: ID do usuário inválido.');
            return res.status(400).json({ success: false, error: 'ID do usuário inválido.' });
        }

        const user = await User.findByIdAndDelete(userId);
        console.log('Remove: user:', user);
        res.json({ success: true, user });
    } catch (error) {
        console.log('Remove: Erro:', error);
        res.json({ success: false, error: error });
    }
};

