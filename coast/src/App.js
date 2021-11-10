import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company'
import Contato from './Components/Pages/Contato'
import Newproject from './Components/Pages/Newproject'

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
/*import {BrowserRouter as Switch} from 'react-router-dom'; não é mais utilizado, substituido pelo Routes*/


function App() {
  return (
    <Router>
      <Home/>
      
      <Switch>
      <Route exact path='/'>
      <Home/>
      </Route>

      <Route path='/Company'>
      <Company/>
      </Route>

      <Route path='/Contato'>
      <Contato/>
      </Route>

      <Route path='/Newproject'>
      <Newproject/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
