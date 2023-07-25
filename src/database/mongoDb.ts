import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log('Tentando conectar ao MongoDB');
        await connect(process.env.MONGO_URL as string, {});
        console.log('Conectado com Sucesso');
    } catch (error) {
        console.log('error ao tenta se conectar ao MongoDB', error);
    }
};
