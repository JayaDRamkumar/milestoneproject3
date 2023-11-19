import { Route, BrowserRouter, Router } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import NewLocationForm from "./components/NewLocationForm"
import LocationDetails from "./components/LocationDetails"
import ApplyNow from './components/ApplyNow';


function App() {
  return (
    <BrowserRouter>

     
        <AppNavbar />
       
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/location" component={Home} />
            <Route exact path="/addlocation" component={NewLocationForm} />
            <Route exact path="/location/:id" component={LocationDetails} />
            <Route exact path="/location/:id/applynow" component={ApplyNow}/>
            </Router>
       
    </BrowserRouter>

  );
}

export default App;