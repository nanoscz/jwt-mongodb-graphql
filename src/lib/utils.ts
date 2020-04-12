function returnResultUser(user: any, status: boolean, message: string) {
  return {
    user,
    status,
    message,
  };
}

export {
  returnResultUser,
};
