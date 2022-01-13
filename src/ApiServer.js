const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());

const upload = multer({
    dest: './uploads/'
});

app.post('/upload', upload.array('file'), async (req, res) => {
    console.log(`Files received: ${req.files.length}`);
    res.send({
        upload: true,
        files: req.files
    });
});

app.get('/', (req, res) => {
    res.send('ack');
});

app.listen(8080, () => {
    console.log('App running on http://localhost:8080');
});
