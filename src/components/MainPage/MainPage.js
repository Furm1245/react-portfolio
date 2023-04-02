import './MainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'


const MainPage = () => {
    return (
        <>
            <main>
                <section id='main-banner'>
                    <h1>Furman Walker</h1>
                    <div>
                        <h3>FrontEnd Developer</h3>
                    </div>
                    <div>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before final copy is available. </p>
                    </div>
                    <div className='banner-buttons'>
                        <Button variant={'outline'} text={'Check Out My Github'}>
                            Check Out My Github
                        </Button>
                        <Button variant={'light'} text={'View My Projects'}>
                        </Button>
                    </div>
                    <div className='arrow-down'>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </section>
                <section id='about-section'>
                    <h2>About</h2>
                </section>
                <section id='project-section'>
                    <h2>Project</h2>
                </section>
                <section id='contact-section'>
                    <h2>Contact</h2>
                </section>
            </main>
            <ul className='social-icons'>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
            </ul>
        </>

    )
}

export default MainPage