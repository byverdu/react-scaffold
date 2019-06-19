import { Application, Request, Response } from "express";

const express = require('express');
const app: Application = express();
const PORT = process.env.PROT || 3001;

app.use('app/public/', function (req, res) {
  res.sendFile('index.html');
})

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

app.get('/', function (req, res) {
  res.status(200).sendFile( __dirname + '/app/public/index.html');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
