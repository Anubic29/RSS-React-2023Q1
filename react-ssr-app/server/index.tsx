import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = 8000;

const app = express();

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./index.html'), 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Some error happend');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port - ${PORT}`);
});
