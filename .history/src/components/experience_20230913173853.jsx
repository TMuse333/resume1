
import { motion } from 'framer-motion';

const Experience = (props) => {
  const { title, image, description } = props;

  return (
    <motion.div
      className='card-container'
      initial={{ opacity: 0, x: 100 }} // Initial state (off-screen to the right)
      animate={{ opacity: 1, x: 0 }} // Animate to this state (centered)
      exit={{ opacity: 0, x: -100 }} // Animation when it exits (off-screen to the left)
    >
      <h2>{title}</h2>
      <div className='image-container'>
        <motion.img
          src={image}
          style={{
            height: '300px',
            width: '215px',
          }}
          alt={title}
          initial={{ opacity: 0 }} // Initial opacity (hidden)
          animate={{ opacity: 1 }} // Animate to full opacity
          exit={{ opacity: 0 }} // Animation when it exits (hidden)
        />
      </div>
      <p>{description}</p>
    </motion.div>
  );
};

export