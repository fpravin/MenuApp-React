import { useState } from "react";
import "./App.css";
import MenuContent from "./Components/menu/MenuContent";
import AdminContent from "./Components/admin/AdminContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Home />
      </div>
      <div className="App">
        <Route path="/menu">
          <MenuContent />
        </Route>
        <Route path="/admin">
          <AdminContent />
        </Route>
      </div>
    </Router>
  );
}

export default App;
