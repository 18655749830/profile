import { useRoutes } from "react-router-dom"
import routes from '@/router'

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      { useRoutes(routes) }
      <Footer />
    </div>
  );
}

export default App;
