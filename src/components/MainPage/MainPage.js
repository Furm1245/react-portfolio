import './MainPage.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faM, faJ, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs, faHtml5, faBootstrap, faCss3Alt, faReact, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from '../UI/Button'
import image0 from '../assets/image0.jpeg'
import netflix from '../assets/netflix.PNG'
import indeed from '../assets/indeed.PNG'
import Card from '../UI/Card'
import placeholder from '../assets/placeholder.webp'



const MainPage = () => {

    const [visible, setVisible] = useState(true)
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])



    window.addEventListener('scroll', () => {
        setVisible(false)
    });

    return (
        <>
            <main>
                <section id='main-banner'>
                    <h1>Furman Walker</h1>
                    <div>
                        <h3>FrontEnd Developer</h3>
                    </div>
                    <div>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                    </div>
                    <div className='banner-buttons'>
                        <a href='https://github.com/Furm1245' target='__blank'>
                            <Button variant={'outline'} text={'Check Out My Github'}>
                                Check Out My Github
                            </Button>
                        </a>

                        <a href='#project-section'>
                            <Button variant={'light'} text={'View My Projects'}>
                            </Button>
                        </a>
                    </div>
                    <div className='arrow-down' style={{ display: visible ? 'block' : 'none' }}>
                        <a href='#about-section'>
                            <FontAwesomeIcon icon={faAngleDown} bounce />
                        </a>
                    </div>
                </section>
                <section id='about-section'>
                    <h2>About Me</h2>
                    <div className='about-container'>

                        <div className='about-info'>
                            <div className='about-description'>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
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
                    <h2>Projects</h2>
                    <div>
                        {!isMobile &&
                            <div>
                                <div className='project-card'>
                                    <div className='project-image'>
                                        <img src={netflix} alt='website similar to netflix'></img>
                                    </div>
                                    <div className='project-info'>
                                        <div>
                                            <h3>React Movies</h3>
                                        </div>
                                        <div className='project-description'>
                                            <p>A web app similar to netflix that uses <a href='https://www.themoviedb.org' target='__blank'>The Movie Database API</a>. Display's trending movies and tv shows, and lets you view trailers for them.</p>
                                        </div>
                                        <div className='project-icons'>
                                            <ul className='project-icons'>
                                                <li>
                                                    <h5>React Js</h5>
                                                </li>
                                                <li>
                                                    <h5>HTML/Javascript/CSS</h5>
                                                </li>
                                            </ul>

                                        </div>
                                        <div>
                                            <a href='https://github.com/Furm1245/netflix' target='__blank'><FontAwesomeIcon icon={faGithub} /></a>
                                            <a href='https://react-movies-75d11.web.app' target='__blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-card'>
                                    <div className='project-info'>
                                        <div>
                                            <h3>React Indeed</h3>
                                        </div>
                                        <div className='project-description'>
                                            <p>Based on the Indeed Website, It has majority of the main features such as applying, posting jobs, and viewing applicants/applications. It's also a complete CRUD application.</p>
                                        </div>
                                        <ul className='project-icons'>
                                            <li>
                                                <h5>React Js</h5>
                                            </li>
                                            <li>
                                                <h5>HTML/Javascript/CSS</h5>
                                            </li>
                                            <li>
                                                <h5>Node Js</h5>
                                            </li>
                                            <li>
                                                <h5>MongoDb</h5>
                                            </li>
                                        </ul>
                                        <div>
                                            <a href='https://github.com/Furm1245/indeed' target='__blank'><FontAwesomeIcon icon={faGithub} /></a>
                                            <a href='https://rindeed.firebaseapp.com' target='__blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                        </div>
                                    </div>
                                    <div className='project-image'>
                                        <img src={indeed} alt='website similar to indeed'></img>
                                    </div>
                                </div>
                                <div className='project-card'>
                                    <div className='project-image'>
                                        <img src={placeholder} alt='nothing'></img>
                                    </div>
                                    <div className='project-info'>
                                        <div>
                                            <h3>Coming Soon</h3>
                                        </div>
                                        <div className='project-description'>
                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                                Lorem ipsum may be used as a placeholder before final copy is available.
                                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }

                        {isMobile &&
                            <div>
                                <Card
                                    title={'React Movies'}
                                    background={netflix}
                                    description={'A web app similar to netflix that uses The Movie Database API. Displays trending movies and tv shows, and lets you view trailers for them.'}
                                    icons={['React Js', 'HTML', 'Javascript', 'CSS']}
                                />
                                <Card
                                    title={'React Indeed'}
                                    background={indeed}
                                    description={'Based on the Indeed Website. It has majority of the maion features such as applying, posting jobs, and viewing applicants/applications. Its also a complete CRUD application.'}
                                    icons={['React Js', 'HTML', 'Javascript', 'CSS', 'Node Js', 'MongoDB']}
                                />
                                <Card
                                    title={'Coming Soon'}
                                    background={placeholder}
                                    description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual'}
                                />
                            </div>
                        }


                    </div>
                </section>
                <section id='contact-section'>
                    <h2>Contact Me</h2>
                    <div className='contact-container'>
                        <div className='contact-text'>
                            <h3>Lorem ipsum</h3>
                            <p> Feel free to email me at  <a href="mailto:walkerfurman@yahoo.com" target="__blank">
                                walkerfurman@yahoo.com
                            </a> or fill out the form if you have any questions about anything.
                                Im also currently open to all oppurtunities right now.</p>
                        </div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="your first name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" >
                                <Form.Control as="textarea" placeholder="Your message" rows={4} required />
                            </Form.Group>
                            <Button variant={'contact-light'} text={'Submit'} />
                        </Form>
                    </div>
                </section>
            </main>
            <ul className='social-icons'>
                <a href='https://github.com/Furm1245' target='__blank'><li><FontAwesomeIcon icon={faGithub} /></li></a>
                <a href='https://www.linkedin.com/in/furman-walker-87b483234/?trk=public-profile-join-page' target='__blank'><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                <a href='https://www.facebook.com' target='__blank'><li><FontAwesomeIcon icon={faFacebook} /></li></a>
            </ul>
        </>

    )
}

export default MainPage