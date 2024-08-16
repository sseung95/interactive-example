import Marquee from '@/components/marquee/Marquee';

const MarqueePage = () => {
  return (
    <div className="bg-[#141414] h-[100vh]">
      <div className="min-h-dvh flex items-center">
        <div className="w-full py-12 text-white text-4xl">
          <div
            className="overflow-clip rotate-[-12deg]"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5rem, black calc(100% - 5rem), transparent)',
            }}
          >
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueePage;
