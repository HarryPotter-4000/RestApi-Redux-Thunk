import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/rest-api-redux-thunk/" element={ <Home title='Home'/> } />
          <Route path="/adduser/" element={ <AddUser title='Add Users'/> } />
          <Route path="/users/" element={<Users title='Users' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;