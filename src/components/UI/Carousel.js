import './Carousel.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'

const dataSlider = [
    {
        id: 1,
        title: "lorem ipsum",
        description: 'lorem'
    },

];


const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(1)

    return (
        <>
            <FontAwesomeIcon icon={faArrowLeft} />
            <FontAwesomeIcon icon={faArrowRight} />
            <div className='project-container'>
                {dataSlider.map((obj, index) => {
                    return (
                        <div key={obj.id}>
                            <div
                                className='project-image'
                            >

                                <img src={process.env.PUBLIC_URL + `/assets/img${currentIndex}.png`} alt='projects'></img>
                            </div>
                            <div>
                                {obj.title}
                            </div>
                            <div>
                                {obj.description}
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='project-buttons'>
                <Button variant={'outline'} text={'Previous'}>
                </Button>
                <Button variant={'outline'} text={'Next'}>
                </Button>
            </div>
        </>

    )
}

export default Carousel