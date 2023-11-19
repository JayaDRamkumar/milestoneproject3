
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>

     
        <AppNavbar />
       
          <Switch>
            <Route exact path="/" component={Home} />
            
          </Switch>
       
    </BrowserRouter>

  );
}

export default App;