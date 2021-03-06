import { IResolvers } from 'graphql-tools';
import { Datetime } from '../lib/datetime';
import { returnResultUser } from '../lib/utils';
import bcryptjs from 'bcryptjs';

const mutation: IResolvers = {
  Mutation: {
    async register(_: void, { user }, { db }): Promise<any> {
      const lastUser = await db.collection('users').find().limit(1).sort({ date: -1 }).toArray();
      if (lastUser.length === 0) {
        user.id = 1;
      } else {
        user.id = lastUser[0].id + 1;
      }
      const salt = await bcryptjs.genSalt(10);
      const password = await bcryptjs.hashSync(user.password, salt);
      user.password = password;
      user.date = new Datetime().getCurrentDateTime();

      return db.collection('users').insertOne(user)
        .then((data: any) => {
          return returnResultUser(user, true, 'successful register.');
        })
        .catch((err: any) => {
          return returnResultUser(null, false, 'register failed.');
        });
    },
  },
};

export default mutation;
