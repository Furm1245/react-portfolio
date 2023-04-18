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
                {props.icons && props.icons.length > 1 &&
                    <ul className='card-icons'>
                        {props.icons.map(icon => (
                            <li key={icon}>{icon}</li>
                        ))}
                    </ul>
                }
                <div >
                    <a href='https://github.com/Furm1245' target='__blank'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='https://github.com/Furm1245' target='__blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
            </div>
        </div>
    )
}

export default Card