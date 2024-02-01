const express = require('express');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/log', (req, res) => {
    const { word } = req.body;

    // Get current timestamp in the specified format
    const timestamp = moment().format('MM/DD/YYYY HH:mm:ss.SSS Z');

    // Create log message
    const logMessage = `${timestamp} INFO Word = ${word}\n`;

    // Log the message to the console
    console.log(logMessage);

    // Log the message to a file
    const logFilePath = path.join(__dirname, 'log', 'app_logs.log');
    fs.appendFile(logFilePath, logMessage, (err) => {
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
    console.log(`Server running on port ${PORT}`);
});