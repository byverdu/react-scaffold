import { Application, Request, Response } from 'express';
import path from 'path';

const express = require('express');
const app: Application = express();
const PORT = process.env.PROT || 3001;

app.use('/static', express.static(path.join(__dirname, "/client/static")))

app.get('/todos', function (req: Request, res: Response) {
  res
    .status(200)
    .json({
      '1234': {
        id: '1234',
        text: 'alohhaa',
        done: false
      }
    });
});

const jsonPath = path.join(__dirname, 'client/index.html');

app.get('/', function (req, res) {
  res.status(200).sendFile( jsonPath );
});

app.listen(PORT, function () {
  console.info(`Example app listening on port ${PORT}!`);
});
