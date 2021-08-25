/* eslint-disable strict */
const jsonwebtoken = require('jsonwebtoken');

module.exports = options => {
  return async (ctx, next) => {
    const { authorization = '' } = ctx.request.header;
    const token = authorization.replace('Bearer ', '');
    try {
      const user = jsonwebtoken.verify(token, 'demo');
      ctx.state.user = user;
    } catch (err) {
      ctx.throw(401, err.message);
    }
    await next();
  };
};
