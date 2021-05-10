const express = require('express');
const app = express();
const PORT = process.env.port || 3000;
const {postZip, getAll, deleteZip, hasZip, test} = require('./route-callbacks.js');


app.use(express.json());

app.post('/insert', postZip);
app.delete('/insert', deleteZip);
app.get('/insert', hasZip);
app.get('/display', getAll);
app.get('/test', test);
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));