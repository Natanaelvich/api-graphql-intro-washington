import AppError from '@/errors/AppError';
import genereator from '@/helpers/genereator';

const context = ({ req }) => {
  const token = req.headers.authorization;

  return {
    validate() {
      try {
        const { id } = genereator.verifyToken(token);
        return id;
      } catch (error) {
        throw new AppError('No Permission');
      }
    },
  };
};

export default context;
