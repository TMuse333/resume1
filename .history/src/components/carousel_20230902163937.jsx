import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'



const Carousel = () => {
    const [currentIndex,setCurrentIndex] = useState(0)

    const images = [
        vegeta,
        majinVegeta
    ]

    const handleNext = () =>{
        setCurrentIindex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
      };

      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      };

      const handleDotClick = (index) => {
        setCurrentIndex(index);
      };


      return (
        <div clas
      )


    }


