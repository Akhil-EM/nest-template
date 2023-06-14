import { User, UserSchema } from './schemas/user.schema';
export const databaseProvider = {
  User: { name: User.name, schema: UserSchema },
};
