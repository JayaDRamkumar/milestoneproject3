import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import NewLocationForm from "./components/NewLocationForm"
import LocationDetails from "./components/LocationDetails"
import AddLocation from './components/AddLocation';
import ApplyNow from './components/ApplyNow';


function App() {
  return (
    <BrowserRouter>

     
        <AppNavbar />
       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/location" component={Home} />
            <Route exact path="/addlocation" component={NewLocationForm} />
            <Route exact path="/location/:id" component={LocationDetails} />
            <Route exact path="/location/:id/add" component={AddLocation}/>
            <Route exact path="/location/:id/applynow" component={ApplyNow}/>
          </Switch>
       
    </BrowserRouter>

  );
}

export default App;