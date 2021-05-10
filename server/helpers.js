const validateZip = (zip) =>  {
  if (typeof zip !== 'string') {
    return false;
  }
  if (zip.length !== 5) {
    return false;
  } else {
    return true;
  }
}


module.exports.validateZip = validateZip;