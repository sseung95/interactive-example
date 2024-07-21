import StickyFooter from '@/components/stickyFooter/StickyFooter';

const page = () => {
  return (
    <>
      <div className="h-screen flex text-[2vw] items-center justify-center">
        <h2 className="max-w-[45%] text-center leading-none">This is an example of a sticky footer made with CSS.</h2>
      </div>

      <StickyFooter />
    </>
  );
};

export default page;
