import React, {useState, useRef, useEffect} from 'react'
import style from './SliderCard.module.css'

import man from '../../Assets/man.png'

import { motion } from 'framer-motion'

const SliderCard = () => {
  return (
    <motion.div className={style.sliderCard}>
        <div className={style.sliderCard_box}>
            <motion.div className={style.sliderCard_box_img}>
                <img src={man} alt='profile'  width={100} height={100}/>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default SliderCard