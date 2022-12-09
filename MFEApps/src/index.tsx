import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Accounts } from "./components/Accounts";

const accountsElementId = "jnvapp-accounts";
try {
  const root = ReactDOM.createRoot(document.getElementById(accountsElementId) as HTMLElement);
  root.render(
    <React.StrictMode>
      <Accounts />
    </React.StrictMode>
  );
} catch (e) {
  console.error("Could not find element with id " + accountsElementId);
}
