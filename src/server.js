import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./routes";
import App from "./app";
import createStore from "./redux/store/index";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  const context = {};
  const store = createStore();

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route))
    .map(route => route.component)
    .filter(comp => comp.serverFetch)
    .map(comp => store.dispatch(comp.serverFetch()));

  Promise.all(dataRequirements).then(() => {
    const content = (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    const html = renderToString(content);
    const state = store.getState();
    const helmet = Helmet.renderStatic();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate(html, state, helmet));
  });
});

app.listen(3001);

function htmlTemplate(html, state, helmet) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <title>React SSR Webpack Redux</title>
        </head>
        
        <body>
            <div id="app">${html}</div>
            <script>
                window.INITIAL_STATE = ${JSON.stringify(state)}
            </script>
            <script src="/vendor.js"></script>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}
