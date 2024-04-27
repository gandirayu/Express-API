const express = require('express');
const bodyParser = require('body-parser');
const BukuController = require('./controller/BukuController');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create data / insert data
app.post('/api/list_buku', BukuController.post);

// read data / get data
app.get('/api/list_buku', BukuController.get);

// update data
app.put('/api/list_buku/:id', BukuController.put);

// delete data
app.delete('/api/list_buku/:id', BukuController.delete);

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: http://localhost:${PORT}`));