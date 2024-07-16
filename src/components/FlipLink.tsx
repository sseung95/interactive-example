'use client';
import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      /*
       * staggerChildren: variants를 사용할시 자식 컴포넌트 애니메이션의 시차를 둘 수 있다.
       * staggerChildren 을 여기서 지정하게 되면 위의 텍스트 애니메이션이 모두 끝난후에야 밑의 텍스트 애니메이션이 실행된다.
       */
      // transition={{
      //   staggerChildren: 0.2,
      // }}
      href={href}
      className="relative block whitespace-nowrap overflow-hidden text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      {/* 자식 요소에 variants 를 지정하고 부모 요소에 initial, whileHover 를 지정하면 부모 요소에 트리거가 걸리고 자식 요소에 애니메이션 걸린다고 이해하면 될듯 */}
      <div>
        {children.split('').map((l, i) => {
          return (
            // 인라인 요소이므로 y 변환 애니메이션이 적용되게 하려면 블록 요소로 바꿔야 한다.
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: '-100%' },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              key={i}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      {/* inset-0 : 상하좌우를 다 0 값으로 지정해줌 (top: 0; right: 0; bottom: 0; left: 0;) */}
      <div className="absolute inset-0">
        {children.split('').map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: '100%' },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              key={i}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default FlipLink;
