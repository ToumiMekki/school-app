import './App.css';
import CloseBar from './CloseBar';
import Dashboard from './Layouts/Dashboard';
import Students from './Layouts/Students';
import Professeurs from './Layouts/Professeurs'
import Cours from './Layouts/Cours'
import Classes from './Layouts/Classes'
import Frais from './Layouts/Frais'
import {BrowserRouter, Route} from 'react-router-dom'
import Staff from './Layouts/Staff'
import Login from './Layouts/Login';
import DailyTime from './Layouts/DailyTime';
import Setting from './Components/Setting/Setting';
import "./Components/Main.css"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <CloseBar />
        <Route exact path="/" component={Login} />
        <Route path="/dash" component={Dashboard} />
        <Route path="/staff" component={Staff} />
        <Route path="/students" component={Students} />
        <Route path="/professeurs" component={Professeurs} />
        <Route path="/cours" component={Cours} />
        <Route path="/classes" component={Classes} />
        <Route path="/frais" component={Frais} />
        <Route path="/DailyTime" component={DailyTime} />
        <Route path="/Setting" component={Setting} />

    </div>
    </BrowserRouter>
  );
}

export default App;
