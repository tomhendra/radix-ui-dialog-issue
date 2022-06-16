import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
} from "@remix-run/react";

import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import styles from "~/styles/reset.css";

const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Radix UI Issue",
  viewport: "width=device-width,initial-scale=1",
});

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export { meta, links, App as default };
