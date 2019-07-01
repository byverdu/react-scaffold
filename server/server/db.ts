import path from 'path';

const dbPath = process.env.DB_PATH || path.join(__dirname, 'todosDb');
let level;
let db;

if (process.env.NODE_ENV === 'test') {
  level = require('level-test')({ mem: true })
  db = level({ valueEncoding: 'json' })
} else {
  level = require('level');
  db = level(dbPath)
}

export default db;
