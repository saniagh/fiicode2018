module.exports = (req, res, next) => {
  let message = '';
  let formValidity = true;
  const requestData = req.body;

  if (requestData) {
    if (typeof requestData.command !== 'string' ||
        requestData.command.length === 0 || requestData.command.length > 50)
      formValidity = false;

  } else formValidity = false;

  if (formValidity === false)
    message = 'Incorrect command.';

  req.body = {
    ...req.body,
    message: message,
    success: formValidity,
  };

  return next();

};
