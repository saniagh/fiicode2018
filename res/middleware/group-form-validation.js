module.exports = (req, res, next) => {
  let message = '';
  let formValidity = true;
  const requestData = req.body;

  if (requestData) {
    if (typeof requestData.groupName !== 'string' ||
        requestData.groupName.length === 0)
      formValidity = false;

    if (typeof requestData.ownerEmailAddress !== 'string' ||
        requestData.ownerEmailAddress.length === 0)
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
