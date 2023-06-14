import { Sequelize } from 'sequelize-typescript';
import { sqlConfig } from '../../config/database.config';
import { User } from './entities/user.entity';

const { database, host, password, port, username } = sqlConfig;
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: host,
        port: parseInt(port),
        username: username,
        password: password,
        database: database,
        logging: false,
      });

      try {
        sequelize.addModels([User]);
        await sequelize.authenticate();
        console.log('mysql database connection success...');
        // await sequelize.sync({ force: true });
        // console.log('database sync success');
      } catch (error) {
        console.log('mysql database connection error :', error.message);
      }

      return sequelize;
    },
  },
];
