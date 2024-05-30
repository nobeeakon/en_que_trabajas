import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_FILE_NAME = 'data.db';

export const openDb = async () =>
    open({
        filename: `db/data/${DB_FILE_NAME}`,
        driver: sqlite3.cached.Database,
    });
