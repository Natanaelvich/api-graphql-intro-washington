class AppError extends Error {
  constructor(message: string, ...args) {
    super(message, ...args);
    this.message = message;
  }
}

export default AppError;
