import 'dotenv/config';
import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/users.route.js';
import { verifyTokenJWT } from './middlewares/jwt.middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/SignIn', userRouter);

app.get('/agent', (req, res)=>{
    res.sendFile(__dirname + '/public/agent.html');
});

app.get('/restricted-url', verifyTokenJWT, (req, res)=>{
    res.sendFile(__dirname + '/public/restricted_page.html');

});


app.listen(PORT, ()=>{
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});



