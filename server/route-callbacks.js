const {validateZip, formatZips} = require('./helpers.js');


const zipCodes = {
  //does not persist when server stops
}


const routes = {
  postZip: (req, res) => {
    const {zip} = req.query;
    if (!zip) {
      res.sendStatus(422);
    } else {
      //validate zipcode
      const isValid = validateZip(zip);
      if (!isValid) {
        res.sendStatus(422);
      } else {
        zipCodes[zip] = Number(zip);
        res.sendStatus(201)
      }
    }
  },
  deleteZip: (req, res) => {
    const {zip} = req.query;
    if (!zip) {
      res.sendStatus(422);
    } else {
      delete zipCodes.zip;
      res.sendStatus(204);
    }
  },
  hasZip: (req, res) => {
    const {zip} = req.query;
    if (!zip) {
      res.sendStatus(422);
    } else {
      const isValid = validateZip(zip);
      if (!isValid) {
        res.sendStatus(422);
      } else {
        if (zipCodes[zip] !== undefined) {
          res.status(200).send('found');
        } else {
          res.status(200).send('not found');
        }
      }
    }
  },
  getAll: (req, res) => {
    const zips = formatZips(zipCodes);
    res.status(200).send({zipcodes: zips});
  },
  test: (req, res) => {
    res.send('test complete');
  }
}

module.exports = routes;