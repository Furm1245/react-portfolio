import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [show, setShow] = useState(false)



    const onShow = () => {
        setShow(!show)
        if (!show) {
            if (window.innerWidth <= 768) {
                document.body.classList.add('body-lock'); //  lock scrolling if screen is mobile view
            }
        } else {
            document.body.classList.remove('body-lock'); // unlock scrolling
        }
    }

    return (
        <nav className='nav-container'>
            <div className="nav-logo">
                <h2>FW</h2>
            </div>
            <ul className={show ? 'nav-links active' : 'nav-links'}>
                <a onClick={onShow} href='#about-section'><li className="list-items">About</li></a>
                <a onClick={onShow} href='#project-section'><li className="list-items">projects</li></a>
                <a onClick={onShow} href='#contact-section'><li className="list-items">Contact</li></a>
            </ul>
            <div className='hamburger'>
                <FontAwesomeIcon icon={faBars} onClick={onShow} />
            </div>
        </nav>
    )
}

export default Navbar