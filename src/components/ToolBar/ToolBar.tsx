import { NavLink } from 'react-router-dom';
import './ToolBar.css';

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <NavLink to="/" className='text-decoration-none'><span className="navbar-brand mb-0 text-white fs-1">Beks.me</span></NavLink>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ToolBar;