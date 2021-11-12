import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company'
import Contato from './Components/Pages/Contato'
import Newproject from './Components/Pages/Newproject'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './Components/Layout/Container';
/*import {BrowserRouter as Switch} from 'react-router-dom'; não é mais utilizado na versão 6 do (react-router-dom), substituido pelo Routes*/


function App() {
  return (
    <Router>
      <Home/>
      
      <Switch>
      <Container customClass="min-height">
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
      </Container>
      </Switch>
      <footer>footer</footer>
    </Router>
  );
}

export default App;
