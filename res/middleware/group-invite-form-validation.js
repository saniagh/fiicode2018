module.exports = (req, res, next) => {
  let message = '';
  let formValidity = true;
  const requestData = req.body;

  if (requestData) {

    if (typeof requestData.emailAddress !== 'string' ||
        requestData.emailAddress.length === 0)
      formValidity = false;

  } else formValidity = false;

  if (formValidity === false)
    message = 'Something went wrong.';

  req.body = {
    ...req.body,
    message: message,
    success: formValidity,
  };

  return next();

};
