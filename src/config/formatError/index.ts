import AppError from '@/errors/AppError';

export default (err) => {
  if (err.originalError instanceof AppError) {
    return new Error(err.message);
  }

  return err;
};
