import app from './server/app';

const PORT = process.env.PROT || 3001;

app.listen(PORT, function () {
  console.info(`Example app listening on port ${PORT}!`);
});
