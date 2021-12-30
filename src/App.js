import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import Home from './pages/Home'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/adduser" element={ <AddUser title='Add Users'/> } />
          <Route path="/users" element={<Users title='Users' />} />
          <Route path="/" element={ <Home title='Home Page'/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;