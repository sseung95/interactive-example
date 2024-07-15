'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  // once: 최초 한 번만 실행
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: '150vh' }} />
      <motion.div
        style={{
          height: '100vh',
          background: 'black',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: '100vh',
          background: isInView ? 'blue' : 'red',
          transition: '1s background',
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
