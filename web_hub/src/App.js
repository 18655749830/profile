import { useRoutes } from "react-router-dom"
import routes from '@/router'

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";


function App() {
  return (
    <div className="App">
      <AppHeader />
      { useRoutes(routes) }
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
