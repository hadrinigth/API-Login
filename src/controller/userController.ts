import { Request, Response } from 'express';
import User from '../models/userModel';

export const View = async (req: Request, res: Response) => {
    let user = await User.find({});
    res.json(user);
    console.log(user);
};
export const Create = async (req: Request, res: Response) => {
    try {
        let { name, email, password } = req.body;
        let user = new User({
            name: name,
            email: email,
            password: password,
        });

        await user.save();
        res.json({ success: true, user: user });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};

export const Update = async (req: Request, res: Response) => {
    try {
        let userId = req.params.id;
        let updateData = req.body;
        if (userId === null) {
            console.log('Update: ID do usuário inválido.');
            return res.status(400).json({ success: false, error: 'ID do usuário inválido.' });
        }

        let user = await User.findByIdAndUpdate(userId, updateData, { runValidators: true, new: true });
        console.log('Update: user:', user);
        res.json({ success: true, user });
    } catch (error) {
        console.log('Update: Erro:', error);
        res.json({ success: false, error: error });
    }
};

export const Remove = async (req: Request, res: Response) => {
    try {
        let userId = req.params.id;
        if (userId === undefined) {
            console.log('Remove: ID do usuário inválido.');
            return res.status(400).json({ success: false, error: 'ID do usuário inválido.' });
        }

        let user = await User.findByIdAndDelete(userId);
        console.log('Remove: user:', user);
        res.json({ success: true, user });
    } catch (error) {
        console.log('Remove: Erro:', error);
        res.json({ success: false, error: error });
    }
};

