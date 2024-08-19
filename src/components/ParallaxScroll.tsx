'use client';
import { useEffect, useRef } from 'react';
import styles from '../styles/ParallaxScroll.module.css';
import Picture1 from '../../public/images/1.jpg';
import Picture2 from '../../public/images/2.jpeg';
import Picture3 from '../../public/images/3.jpg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';

const word = 'with framer-motion';

const ParallaxScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    // 'start end': 요소의 시작점이 뷰포트의 하단에 닿을 때 (스크롤 내릴때)
    // 'end start': 요소의 끝점이 뷰포트의 상단에 닿을 때 (스크롤 내릴때 -> 화면에 요소가 완전히 안보일 때까지 애니메이션 적용됨)
    offset: ['start end', 'end start'],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split('').map((letter, i) => (
              <Word key={`p-word-${i}`} scrollYProgress={scrollYProgress} letter={letter} i={i} />
            ))}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ src, y }, i) => {
          return (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className={styles.imageContainer}
              transition={{
                type: 'spring',
              }}
            >
              <Image src={src} placeholder="blur" alt="image" fill />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallaxScroll;

const Word = ({ scrollYProgress, letter, i }: { scrollYProgress: any; letter: string; i: number }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]);

  return (
    <motion.span style={{ top: y }} key={`l_${i}`}>
      {letter}
    </motion.span>
  );
};
