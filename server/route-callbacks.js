const {validateZip} = require('./helpers.js');


const zipCodes = {
  //does not persist when server stops
}


const routes = {
  postZip: (req, res) => {
    const {zip} = req.query;
    if (zip) {
      res.sendStatus(422);
    } else {
      //validate zipcode
      const isValid = validateZip(zip);
      if (!isValid) {
        res.sendStatus(422);
      } else {
        zipCodes[zip] = zip;
        res.sendStatus(201)
      }
    }
  },
  deleteZip: (req, res) => {
    if (!req.query.zip) {
      res.sendStatus(422);
    } else {

    }
  },
  getZip: (req, res) => {
    if (!req.query.zip) {
      res.sendStatus(422);
    } else {

    }
  },
  getAll: (req, res) => {

  },
  test: (req, res) => {
    res.send('test complete');
  }
}