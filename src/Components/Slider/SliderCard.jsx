import React, {useState, useRef, useEffect} from 'react'
import style from './SliderCard.module.css'

import man from '../../Assets/man.png'
import woman from '../../Assets/woman.png'

import { motion } from 'framer-motion'

const SliderCard = ({el}) => {
  return (
    <motion.div className={style.sliderCard}>
        <div className={style.sliderCard_box}>
            <motion.div className={style.sliderCard_box_img}>
                <img src={el.gender == 'M' ? man: woman} alt='profile'  width={100} height={100}/><br/>
                <span style={{fontSize:8}}>{el.name}</span>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default SliderCard