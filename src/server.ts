import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import mainRouter from './router/api'



const server = express();

server.use(cors());
dotenv.config();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


// rotas
server.use(mainRouter)
server.listen(process.env.PORT || 1000);
