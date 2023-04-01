import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className="nav-logo">
                <h2>FW</h2>
            </div>
            <ul>
                {/* <li className="list-items"></li> */}
                <a href='/'><li className="list-items">About</li></a>
                <a href='/'><li className="list-items">projects</li></a>
                <a href='/'><li className="list-items">Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar