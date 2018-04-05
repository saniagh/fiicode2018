module.exports = (req, res, next) => {
  const errors = {};
  let message = '';
  let formValidity = true;
  const requestData = req.body;

  if (!requestData || typeof requestData.username !== 'string' ||
      requestData.username.trim().length === 0 ||
      requestData.username.trim().length > 16 ||
      requestData.username.trim().length < 4) {
    formValidity = false;
    errors.username = 'The username should have 4 to 16 characters.';
  }

  if (requestData.username.trim().indexOf('@') > -1) {
    formValidity = false;
    errors.username = 'The username cannot contain \'@\'';
  }

  if (!requestData || typeof requestData.email !== 'string' ||
      requestData.email.trim().length === 0 ||
      requestData.email.trim().length > 254 ||
      requestData.email.trim().length < 3) {
    formValidity = false;
    errors.email = 'The E-mail should have 3 to 254 characters.';
  }

  if (!requestData || typeof requestData.password !== 'string' ||
      requestData.password.trim().length === 0 ||
      requestData.password.trim().length > 64 ||
      requestData.password.trim().length < 8) {
    formValidity = false;
    errors.password = 'The password should have 8 to 64 characters.';
  }

  if (!formValidity)
    message = 'Please check the errors and try again.';
  req.body = {
    ...req.body,
    errors: errors,
    message: message,
    success: formValidity,
  };
  return next();
};
