import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Accounts } from "./components/Accounts/Accounts";
import { AlumniSearch } from "./components/AlumniSearch/AlumniSearch";

const accountsElementId = "jnvapp-accounts";
const alumniSearchElementId = "jnvapp-alumnisearch";
try {
  const alumniAccountsRoot = ReactDOM.createRoot(document.getElementById(accountsElementId) as HTMLElement);
  alumniAccountsRoot.render(
    <React.StrictMode>
      <Accounts />
    </React.StrictMode>
  );
} catch (e) {
  console.log("Element with id " + accountsElementId + " is not available on this page");
}

try {
  const alumniSearchRoot = ReactDOM.createRoot(document.getElementById(alumniSearchElementId) as HTMLElement);
  alumniSearchRoot.render(
    <React.StrictMode>
      <AlumniSearch />
    </React.StrictMode>
  );
} catch (error) {
  console.log("Element with id " + alumniSearchElementId + " is not available on this page");
}
