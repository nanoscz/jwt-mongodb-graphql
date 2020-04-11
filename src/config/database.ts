import mongodb from 'mongodb';
import chalk from 'chalk';

class Database {

  async init() {
    const MONGODB = String(process.env.DATABASE);
    const client = await mongodb.connect(MONGODB, { useNewUrlParser: true });

    const db = await client.db();
    if (client.isConnected()) {
      console.log(`DATABASE: ${chalk.greenBright(db.databaseName)} STATUS: ${chalk.greenBright('ONLINE')}`);
    }
    return db;
  }
}

export default Database;
