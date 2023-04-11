import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [show, setShow] = useState(false)


    const onShow = () => {
        setShow(!show)
        console.log('clicked')
    }

    return (
        <nav className='nav-container'>
            <div className="nav-logo">
                <h2>FW</h2>
            </div>
            <ul className={`nav-links`}>
                <a href='#about-section'><li className="list-items">About</li></a>
                <a href='#project-section'><li className="list-items">projects</li></a>
                <a href='#contact-section'><li className="list-items">Contact</li></a>
            </ul>
            <div className='hamburger'>
                <FontAwesomeIcon icon={faBars} onClick={onShow} />
            </div>
        </nav>
    )
}

export default Navbar