import level, {LevelUp} from 'level';
import path from 'path';

const dbPath = process.env.DB_PATH || path.join(__dirname, 'todosDb');  
const db: LevelUp = level(dbPath);

export default db;