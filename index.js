import express from 'express';
import cors from 'cors';
//import routes from './app/routes';
import dotenv from 'dotenv'
dotenv.config({ silent: true })

const { CORS_ORIGIN, PORT } = process.env;
const app = express();
const corOptions = {
    "origin": CORS_ORIGIN,
    "methods": "GET,HEAD,PATCH,POST,DELETE",
};

app.use(cors(corOptions)); // Habilitando acesso de outra origem Cross-Origin Resource Sharing
app.use(express.json()); // Transforma o JSON do body em um objeto JavaScript
//app.use('/usuarios', routes.usuarios);
//app.use('/projetos', routes.projetos);
app.listen(PORT);