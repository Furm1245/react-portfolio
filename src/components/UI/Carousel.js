import './Carousel.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'

const dataSlider = [
    {
        id: 1,
        title: "lorem ipsum",
        description: ' lorem lorem lorem lorem lorem loremv lorem v v v v vlorem lorem v'
    },
];






const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(1)


    // const projectBackground = {
    //     backgroundImage: `url(${process.env.PUBLIC_URL
    //         + `/assets/img${currentIndex}.png`})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover'
    // }



    const nextSlide = () => {
        if (currentIndex !== dataSlider.length) {
            setCurrentIndex(currentIndex + 1)
        }
        else if (currentIndex === dataSlider.length) {
            setCurrentIndex(1)
        }
    }


    const prevSlide = () => {
        if (currentIndex !== 1) {
            setCurrentIndex(currentIndex - 1)
        }
        else if (currentIndex === 1) {
            setCurrentIndex(dataSlider.length)
        }
    }


    return (
        <div className='project-section'>
            <div className='project-arrows'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={nextSlide} />
            </div>
            <div className='project-container' >
                {dataSlider.map((obj, index) => {
                    return (
                        <div key={obj.id}>
                            <div className='project-image'>
                                <img src={process.env.PUBLIC_URL + `/assets/img${currentIndex}.png`} alt='projects'></img>
                            </div>
                            <div className='project-info'>
                                <div className='project-title'>
                                    {obj.title}
                                </div>
                                <div className='project-d'>
                                    {obj.description}
                                </div>
                                <div className='extra-text'>
                                    <p>View Live Website</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div>

            </div>
            <div className='project-arrows'>
                <FontAwesomeIcon icon={faArrowRight} onClick={prevSlide} />
            </div>
        </div>

    )
}

export default Carousel