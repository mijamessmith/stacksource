const validateZip = (zip) =>  {
  return zip.length === 5;
}

const formatZips = (zips) => {
  const codes = Object.values(zips);
  const sortedCodes = sortCodesInAscendingOrder(codes);
  const zipToString = codesToString(sortedCodes);
  return zipToString;
}

const sortCodesInAscendingOrder = (zips) => {
  return zips.sort((a, b) => a - b);
}

const codesToString = (codes) => {
  let codeStr = '';
  for (let i = 0; i < codes.length; i++) {
    if (i === 0) {
      codeStr+= `${codes[i]},`;
    } else {
      if (codes[i] === codes[i - 1] + 1) {
        if (i === codes.length - 1) {
          codeStr = codeStr.substring(0, codeStr.length - 1) + `-${codes[i]},`;
        } else if (codes[i] === codes[i+1] - 1) {
          continue;
        } else if (codes[i] !== codes[i+1] - 1) {
          codeStr = codeStr.substring(0, codeStr.length - 1) + `-${codes[i]},`;
        } else {
          continue;
        }
      } else {
        codeStr += ` ${codes[i]},`;
      }
    }
  }
  return codeStr.substring(0, codeStr.length - 1);
}

module.exports.validateZip = validateZip;
module.exports.formatZips = formatZips;