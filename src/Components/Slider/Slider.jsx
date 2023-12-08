import React, {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
 

import style from './Slider.module.css'
import SliderCard from './SliderCard'

const Slider = () => {
    const sliderArray = [1,2,3,4,5,6]
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
                        // return (
                        // <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        //     <div style={{border: '1px solid orange', height:100, borderRadius: 100, width: 100}}>
                        //         <h6>Guest {el}</h6>
                        //     </div>
                        // </div>)
                    })}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Slider