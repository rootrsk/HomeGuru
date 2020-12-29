import './css/main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentGoogleForm from './components/StudentGoogleForm'
import TeacherGoogleFrom from './components/TeacherGoogleForm'


function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
          <Route path='/'        component={HomePage} exact/>
          <Route path='/student' component={StudentGoogleForm} />
          <Route path='/teacher' component={TeacherGoogleFrom} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
