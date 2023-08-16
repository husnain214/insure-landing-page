import { howWeWorkPatternDesktop, howWeWorkPatternMobile } from '../assets';
import CtaButton from './CtaButton';

const Explore = () => {
  return (
    <div className="grid place-items-center px-5">
      <div className="container w-full max-w-6xl bg-primary relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-80 px-[81px] py-[69px] mt-40">
        <picture className="absolute inset-0 left-auto">
          <source srcSet={howWeWorkPatternMobile} media="(max-width: 70em)" />
          <img
            src={howWeWorkPatternDesktop}
            className="h-full object-cover"
            alt="pattern"
            aria-hidden="true"
          />
        </picture>

        <h2 className="flex-shrink-4 font-heading text-[40px] md:text-6xl leading-[64px] text-white text-center md:text-start">
          Find out more about how we work
        </h2>
        <CtaButton title="how we work" />
      </div>
    </div>
  );
};

export default Explore;
