import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  console.log(path);
  return ReactDOMServer.renderToPipeableStream(
    // <App />
    <h1>Hello</h1>
    // <StaticRouter location={path}>
    //   <App />
    // </StaticRouter>
  );
};
