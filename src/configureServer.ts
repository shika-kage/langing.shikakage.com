const cors = require('cors');
const path = require('path');
const express = require('express');
const fs = require('fs');

import config from 'config';
const httpPort = config.get('port.http');

const { serverOptions } = require('./utils/getSslCertificat');

const app = express();
const currentPort = serverOptions ? config.get('port.https') : config.get('port.http')
let server;

if(serverOptions) {
    app.listen(httpPort);
    server = require('https').createServer(serverOptions, app);

    if(process.env.NODE_ENV === 'production') {
        app.use((req, res, next) => {
            (req.secure) ? next() : res.redirect(`https://${req.headers.host}${req.url}`);
        });
    }
} else {
    server = require('http').createServer(app);
}

app.use(cors());
app.use(express.json({ extended: true }));
app.get('/additional-info', (_, res) => res.status(200).json(JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'config', 'intial-data.json')))));
app.use('/', express.static(path.join(__dirname, 'client')));
app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'index.html')));

export {
    server,
    currentPort
};