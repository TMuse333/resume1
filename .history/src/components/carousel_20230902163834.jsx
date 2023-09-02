import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'



const Carousel = () => {
    const [currentIndex,setCurrentIndex] = useState(0)

    const handleNext = () =>{
        setCurrentIindex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );

        
      };
    }


