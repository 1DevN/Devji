function Navbar() {
  return (
        <nav className="navbar">
          <div className="container mx-auto flex justify-between items-center">

          
            <ul className="nav-links">
              <li>
                <a href="#" className="nav-link">Home</a>
              </li>
              <li>
                <a href="#" className="nav-link">About</a>
              </li>
              <li>
                <a href="#" className="nav-link">Services</a>
              </li>
              <li>
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );
}

export default Navbar