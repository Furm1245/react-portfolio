import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className="nav-logo">
                <h2>FW</h2>
            </div>
            <ul>
                <a href='#about-section'><li className="list-items">About</li></a>
                <a href='#project-section'><li className="list-items">projects</li></a>
                <a href='#contact-section'><li className="list-items">Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar