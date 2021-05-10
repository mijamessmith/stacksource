const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());

app.post('/insert', );
app.delete('/insert', );
app.get('/insert', );
app.get('/display', );

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));