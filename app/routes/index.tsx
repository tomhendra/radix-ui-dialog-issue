import Sheet from "~/Sheet";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "~/styles/index.css";
import { links as sheetLinks } from "~/Sheet";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...sheetLinks(),
];

export default function Index() {
  return (
    <main>
      <div>
        <Sheet />
        <h2>Radix UI Issue</h2>
      </div>
    </main>
  );
}
