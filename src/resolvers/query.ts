import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    async users(_: void, { }, { db }): Promise<any> {
      try {
        return await db.collection('users').find().toArray();
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default query;
