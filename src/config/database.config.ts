import * as dotenv from 'dotenv';
dotenv.config();
export const mongoDbUrl = process.env.MONGO_DB_URL;
export const sqlConfig = {
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  username: process.env.SQL_USER_NAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB,
};
