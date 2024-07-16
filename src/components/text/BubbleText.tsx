'use client';
import { motion } from 'framer-motion';

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {'Bubbbbbbbble text'.split('').map((child, idx) => (
        <motion.span
          key={idx}
          style={{
            transition: '0.25s color, 0.25s font-weight',
          }}
          className="
            hover:font-black
            hover:text-indigo-100 [&:hover+span]:font-medium [&:hover+span]:text-indigo-200 [&:hover+span+span]:font-light
            [&:has(+span:hover)]:text-indigo-200 [&:has(+span:hover)]:font-medium
            [&:has(+span+span:hover)]:font-light
          "
        >
          {child}
        </motion.span>
      ))}
    </h2>
  );
};

export default BubbleText;
