const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/log', (req, res) => {
    const { word } = req.body;
    const logFilePath = path.join(__dirname, 'log', 'app_logs.log');
    fs.appendFile(logFilePath, word + '\n', (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            res.status(500).send('Error writing to log file');
            return;
        }
        console.log('Word logged successfully:', word);
        res.send('Word logged successfully');
    });
});

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})