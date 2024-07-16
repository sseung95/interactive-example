import FlipLink from '@/components/FlipLink';

const RevealLinkPage = () => {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

export default RevealLinkPage;
