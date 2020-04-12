import { IResolvers } from 'graphql-tools';
import { returnResultUser } from '../lib/utils';

const query: IResolvers = {
  Query: {
    async users(_: void, { }, { db }): Promise<any> {
      try {
        return await db.collection('users').find().toArray();
      } catch (error) {
        console.log(error);
      }
    },
    async login(_: void, { email, password }, { db }): Promise<any> {
      return await db.collection('users').findOne({ email, password })
        .then((user: any) => {
          if (!user) {
            return returnResultUser(null, false, 'email and password incorrect');
          }
          return returnResultUser(user, true, 'successful login');
        })
        .catch((err: any) => {
          return returnResultUser(null, false, 'login failed');
        });
    },
  },
};

export default query;
