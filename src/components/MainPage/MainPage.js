import './MainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faJ } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faM } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'
import image0 from '../assets/image0.jpeg'


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
                        <FontAwesomeIcon icon={faAngleDown} bounce />
                    </div>
                </section>
                <section id='about-section'>
                    <h2>About Me</h2>
                    <div className='about-container'>
                        <div>
                            <div className='about-info'>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                    Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                            </div>
                            <div className='about-icons'>
                                <div>
                                    <FontAwesomeIcon icon={faHtml5} />
                                    <p>Html 5</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                    <p>Css 3</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faJ} />
                                    <p>Javascript</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faReact} />
                                    <p>React Js</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faNodeJs} />
                                    <p>Node Js</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faM} />
                                    <p>MongoDb</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <p>Git</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faBootstrap} />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <img src={image0} alt='Furman walker'></img>
                    </div>
                </section>
                <section id='project-section'>
                    <h2>Project</h2>
                    <div className='project-container'>
                        <div>
                            <img src={process.env.PUBLIC_URL + `/assets/placeholder.webp`} alt='projects'></img>
                        </div>
                        <div>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        </div>
                    </div>
                    <div className='project-buttons'>
                        <Button variant={'outline'} text={'Previous'}>
                        </Button>
                        <Button variant={'outline'} text={'Next'}>
                        </Button>
                    </div>
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