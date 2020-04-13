import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from './../config/constants';
import { TOKEN_FAIL } from './utils';

class JWT {
  private secretKey = SECRET_KEY as string;

  sign(data: any): string {
    console.log("data", data)
    return jwt.sign({ user: data.user }, this.secretKey, { expiresIn: 24 * 60 * 60 });
  }

  verify(token: string): string {
    try {
      return jwt.verify(token, this.secretKey) as string;
    } catch (error) {
      return TOKEN_FAIL;
    }
  }
}

export default JWT;
