import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Accounts } from "./components/Accounts";
import { AlumniSearch } from "./components/AlumniSearch";

const accountsElementId = "jnvapp-accounts";
const alumniSearchElementId = "jnvapp-alumnisearch";
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

try {
  const root = ReactDOM.createRoot(document.getElementById(alumniSearchElementId) as HTMLElement);
  root.render(
    <React.StrictMode>
      <AlumniSearch />
    </React.StrictMode>
  );
  
} catch (error) {
  
}
