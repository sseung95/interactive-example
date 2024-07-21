import { MotionConfig, motion, useInView } from 'framer-motion';
import { forwardRef, useEffect, useRef, useState } from 'react';

const InfoChange = () => {
  const [isShow, setIsShow] = useState(false);
  const [curSection, setCurSection] = useState(1);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const isInView1 = useInView(section1Ref, { amount: 0.3 });
  const isInView2 = useInView(section2Ref, { amount: 0.3 });
  const isInView3 = useInView(section3Ref, { amount: 0.3 });
  const isInView4 = useInView(section4Ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView1) setCurSection(1);
  }, [isInView1]);
  useEffect(() => {
    if (isInView2) setCurSection(2);
  }, [isInView2]);
  useEffect(() => {
    if (isInView3) setCurSection(3);
  }, [isInView3]);
  useEffect(() => {
    if (isInView4) setCurSection(4);
  }, [isInView4]);

  useEffect(() => {
    if (isInView1 || isInView2 || isInView3 || isInView4) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [isInView1, isInView2, isInView3, isInView4]);

  useEffect(() => {
    console.log(isShow);
  }, [isShow]);

  return (
    <div className="relative">
      <InfoSection
        ref={section1Ref}
        title="1. 어쩌구 저쩌구"
        description="어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구"
        bgColor="bg-blue-50"
      />
      <InfoSection
        ref={section2Ref}
        title="2. 어쩌구 저쩌구"
        description="어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구"
        bgColor="bg-blue-100"
      />
      <InfoSection
        ref={section3Ref}
        title="3. 어쩌구 저쩌구"
        description="어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구"
        bgColor="bg-blue-200"
      />
      <InfoSection
        ref={section4Ref}
        title="4. 어쩌구 저쩌구"
        description="어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구"
        bgColor="bg-blue-300"
      />

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        <MotionConfig
          transition={{
            duration: 0.35,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 w-[90%] h-[600px] bg-blue-50 rounded-[32px] text-center text-[40px] mx-[auto]"
            animate={{
              top: isShow && curSection === 1 ? 'calc(-40vh)' : 0,
            }}
          >
            SECTION 1
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 right-0 w-[90%] h-[600px] bg-blue-100 rounded-[32px] text-center text-[40px] mx-[auto]"
            animate={{
              top: isShow && curSection === 2 ? 'calc(-40vh)' : 0,
            }}
          >
            SECTION 2
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 right-0 w-[90%] h-[600px] bg-blue-200 rounded-[32px] text-center text-[40px] mx-[auto]"
            animate={{
              top: isShow && curSection === 3 ? 'calc(-40vh)' : 0,
            }}
          >
            SECTION 3
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 right-0 w-[90%] h-[600px] bg-blue-300 rounded-[32px] text-center text-[40px] mx-[auto]"
            animate={{
              top: isShow && curSection === 4 ? 'calc(-40vh)' : 0,
            }}
          >
            SECTION 4
          </motion.div>
        </MotionConfig>
      </div>
    </div>
  );
};

export default InfoChange;

const InfoSection = forwardRef<HTMLDivElement, { title: string; description: string; bgColor: string }>(
  ({ title, description, bgColor }, ref) => {
    return (
      <section ref={ref} className={`h-screen py-[100px] px-[80px] text-center`}>
        <h3 className="text-[110px] font-semibold mb-[30px]">{title}</h3>
        <p className="text-[28px] my-[28px]">{description}</p>
      </section>
    );
  }
);
