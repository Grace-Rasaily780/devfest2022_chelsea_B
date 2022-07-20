import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Jobs from './pages/Jobs';
import ToTop from './components/ToTop';

function App() {
  return (
    <Router>
      { window.location.pathname.includes('/signup') ? (
        <SignUp />
      ) : window.location.pathname.includes('/login') ? (
        <LogIn />
      ) : window.location.pathname.includes('/job') ? (
        <Jobs />
      ) : (
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <ToTop />
        </div>
      )}
      
    </Router>
  );
}

export default App
