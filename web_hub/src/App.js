import { useRoutes } from "react-router-dom"
import routes from '@/router'



function App() {
  return (
    <div className="App">
      { useRoutes(routes) }
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
