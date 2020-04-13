import bcryptjs  from 'bcryptjs';
import { IResolvers } from 'graphql-tools';
import { TOKEN_FAIL, TOKEN_SUCCESS, returnResulToken, returnResultUser } from '../lib/utils';
import JWT from '../lib/jwt';

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
      try {
        const user = await db.collection('users').findOne({ email });
        if (!user) {
          return returnResulToken(null, false, 'email and password incorrect.');
        }
        const isEqualPassword = await bcryptjs.compareSync(password, user.password);
        if (!isEqualPassword) {
          return returnResulToken(null, false, 'email and password incorrect.');
        }
        delete user.password;
        const token = new JWT().sign({ user });
        return returnResulToken(token, true, 'successful login');
      } catch (error) {
        return returnResulToken(null, false, 'login failed');
      }
    },
    me(_: void, __:any, { token }) {
      const info: any = new JWT().verify(token);
      if (info === TOKEN_FAIL) {
        return returnResultUser(null, false, info);
      }
      return returnResultUser(info.user, true, TOKEN_SUCCESS);
    },
  },
};

export default query;
