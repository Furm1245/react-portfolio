import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Card = (props) => {

    const backgroundImage = {
        backgroundImage: `url(${props.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className='card-container' style={backgroundImage}>
            <div className='overlay'>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <ul className='card-icons'>
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
                    <a href='https://github.com/Furm1245' target='__blank'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='https://github.com/Furm1245' target='__blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
            </div>
        </div>
    )
}

export default Card