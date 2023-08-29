import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { router } from './routes';

const app = express();
// app.use();
app.use(
    cors({
        origin: [
            '*',
            // 'http://localhost:5173',
            // 'https://sprightly-marzipan-3f83a5.netlify.app',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: false,
    }),
);
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

export default app;
