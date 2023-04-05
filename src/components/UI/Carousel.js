import './Carousel.css'
import { useState } from "react"
import Button from '../UI/Button'

const dataSlider = [
    {
        id: 1,
        title: "React Indeed",
        description: 'lorem'
    },

];


const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(1)

    return (
        <>
            {dataSlider.map((obj, index) => {
                return (
                    <div >
                        <div>
                            <img src={process.env.PUBLIC_URL + `/assets/placeholder.webp`} alt='projects'></img>
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
            <div className='project-container'>

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