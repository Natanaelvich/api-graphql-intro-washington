const context = ({ req }) => {
  const user_id = req.headers.authorization;

  return {
    user_id,
  };
};

export default context;
