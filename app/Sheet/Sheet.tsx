import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "react-feather";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./sheet.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function Sheet() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="sheet-button">
          <Menu />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay" />
        <Dialog.Content className="sheet-content">
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close asChild>
            <button className="sheet-button">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { links, Sheet as default };
