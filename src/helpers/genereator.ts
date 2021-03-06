import jwt from 'jsonwebtoken';

export default {
  createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'abc123', {
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    });
  },
  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET || 'abc123');
  },
};
