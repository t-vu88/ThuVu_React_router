import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WELCOME TO REACT ROUTER</h1>
      </header>
      <div className = "navbar">
      <nav>
        <Link to={"/"}><strong>Home</strong></Link>
        <Link to={"/about"}><strong>About</strong></Link>
        <Link to={"/contact"}><strong>Contact</strong></Link>
      </nav>
      <Outlet />
      </div>
    </div>
  );
}
export default App;
