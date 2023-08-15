import CtaButton from './CtaButton';

const Explore = () => {
  return (
    <div className="container bg-primary flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-80 mx-auto px-[81px] py-[69px] mt-40">
      <h2 className="flex-shrink-4 font-heading text-[40px] md:text-7xl leading-[64px] text-white text-center md:text-start">
        Find out more about how we work
      </h2>
      <CtaButton title="how we work" />
    </div>
  );
};

export default Explore;
