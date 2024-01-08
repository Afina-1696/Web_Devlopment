import "./App.css"; // Make sure this file contains the required styles for overlay-navbar
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
