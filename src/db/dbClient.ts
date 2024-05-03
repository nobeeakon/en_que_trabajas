import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_FILE_NAME = 'words.db';

// TODO sql injection escaping
export const openDb = async () =>
    open({
        filename: path.join(__dirname, `./${DB_FILE_NAME}`),
        driver: sqlite3.cached.Database,
    });
