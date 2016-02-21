import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import webpack from 'webpack';

import config from '../../webpack.config.dev.js';

const Html = ({
  title = 'React Starter',
  bundle = '/app.js',
  body = '',
  favicon = '',
  stylesheet = ''
}) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      {favicon && <link rel='shortcut icon' href={favicon} />}
      {stylesheet && <link rel='stylesheet' href={stylesheet} />}
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: body }} />
      <script src={bundle} />
    </body>
  </html>
);

const renderToDocumentString = props =>
  '<!doctype html>' + renderToStaticMarkup(<Html {...props} />);


const compiler = webpack(config);

module.export = function(app) {

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', (req, res) => {
    const html = renderToDocumentString({
      bundle: config.output.publicPath + 'app.js'
    });
    res.send(html);
  });
};
