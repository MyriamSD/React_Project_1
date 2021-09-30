import "./App.css";
import Home from "./Components/Home";
import Makeup from "./Components/Makeup";
import Fashion from "./Components/Fashion";
import HairAndAcc from "./Components/HairAndAcc";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

      {/* <Navbar/> */}
      
       
        <Switch>
        <Route path="/Home" exact component={Home}/>
        <Route path="/Fashion" exact component={Fashion}/>
        <Route path="/HairAndAcc" exact component={HairAndAcc}/>
        <Route path="/Makeup" exact component={Makeup}/>
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;

