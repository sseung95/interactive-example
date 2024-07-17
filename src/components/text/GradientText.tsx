'use client';
import { motion } from 'framer-motion';

const GradientText = ({ text = '' }) => {
  return (
    <div className="flex flex-col gap-6">
      <motion.p
        className="inline-block text-5xl font-bold text-transparent"
        style={{
          backgroundImage: 'linear-gradient(to right, #00CC99, #9D42FB)',
          WebkitBackgroundClip: 'text',
        }}
      >
        {text}, 저는 배경색이 고정되어 있어요.
      </motion.p>
      <motion.p
        className="inline-block text-5xl font-bold text-transparent"
        style={{
          backgroundImage: 'linear-gradient(to right, #00CC99, #9D42FB)',
          WebkitBackgroundClip: 'text',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
        transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        {text}, 저는 배경색이 바뀌어요.
      </motion.p>
    </div>
  );
};

export default GradientText;
