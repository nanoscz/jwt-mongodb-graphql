function returnResultUser(user: any, status: boolean, message: string) {
  return {
    user,
    status,
    message,
  };
}

function returnResulToken(token: any, status: boolean, message: string) {
  return {
    token,
    status,
    message,
  };
}

const TOKEN_FAIL = 'invalid token.';
const TOKEN_SUCCESS = 'token correct.';

export {
  returnResultUser,
  returnResulToken,
  TOKEN_FAIL,
  TOKEN_SUCCESS,
};
