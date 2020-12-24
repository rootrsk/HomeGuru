import './css/main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
