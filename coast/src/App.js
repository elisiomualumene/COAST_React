import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company'
import Contato from './Components/Pages/Contato'
import Newproject from './Components/Pages/Newproject'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <ul>
      <li>Home</li>
      <li>Company</li>
      <li>Contato</li>
      <li>Novo Projeto</li>
      </ul>
      <Switch>
      <Route exact path='Home'>
      <Home/>
      </Route>

      <Route path='Company'>
      <Company/>
      </Route>

      <Route path='Contato'>
      <Contato/>
      </Route>

      <Route exact path='Novo_Projeto'>
      <Newproject/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
