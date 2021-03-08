import AppError from '@/errors/AppError';
import genereator from '@/helpers/genereator';
import { PubSub } from 'apollo-server';

const pubsub = new PubSub();

const context = ({ req }) => {
  const token = req?.headers?.authorization;

  return {
    validate() {
      try {
        const { id } = genereator.verifyToken(token);
        return id;
      } catch (error) {
        throw new AppError('No Permission');
      }
    },
    pubsub,
  };
};

export default context;
