import React, {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
 

import style from './Slider.module.css'
import SliderCard from './SliderCard'

const Slider = () => {
    const sliderArray = [
        {id:1, name: 'John', gender: 'M'},
        {id:2, name: 'Jane', gender: 'F'},
        {id:3, name: 'Mike', gender: 'M'},
        {id:4, name: 'Terry', gender: 'M'},
        {id:5, name: 'Jenny', gender: 'F'},
        {id:6, name: 'Matt', gender: 'M'},
        {id:7, name: 'Mary', gender: 'F'},
        {id:8, name: 'Molly', gender: 'F'}
    ]
    const [width, setWidth] = useState(0)

    const dragSlider = useRef()

    useEffect(() => {
        setWidth(dragSlider.current.scrolWidth - dragSlider.current.offsetWidth)
    })

    const handleScroll = (direction) => {
        console.log(direction)
        const {current} = dragSlider
        const scrollAmount = window.innerWidth > 1800 ? 270: 210

        if(direction == 'left'){
            current.scrollLeft -= scrollAmount
        }
        else{
            current.scrollLeft += scrollAmount
        }
    }

  return (
    <div className={style.slider}>
        <div className={style.slider_box}>
            
            <div className={style.slider_box_button}>
               
                <div className={style.slider_box_button_btn}>
                    <button onClick={() => handleScroll('left')}>Left Arrow</button>
                </div>
                <div className={style.slider_box_button_btn}>
                    <button onClick={() => handleScroll('right')}>Right Arrow</button>
                </div>
            </div>

            <motion.div className={style.slider_box_items} ref={dragSlider}>
                <motion.div
                     ref={dragSlider} 
                     className={style.slider_box_item}
                     drag='x'
                     dragConstraints = {{right: 0, left: -width}}
                >
                    {sliderArray.map((el, i) => {
                        return <SliderCard key={i+1} el={el} i={i} />
                    })}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Slider