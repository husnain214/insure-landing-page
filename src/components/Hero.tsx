import {
  imageIntroDesktop,
  imageIntroMobile,
  introLeftPatternDesktop,
  introLeftPatternMobile,
  introRightPatternDesktop,
  introRightPatternMobile,
} from '../assets';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary md:px-5 relative text-white min-h-[100vh] grid place-content-center md:py-32 isolate">
      <picture>
        <source srcSet={introRightPatternMobile} media="(max-width: 768px)" />
        <img
          src={introRightPatternDesktop}
          className="absolute top-[85%] md:top-0 right-0 z-50"
          alt="pattern"
          aria-hidden="true"
        />
      </picture>
      <picture>
        <source srcSet={introLeftPatternMobile} media="(max-width: 768px)" />
        <img
          src={introLeftPatternDesktop}
          className="absolute left-0 top-[35em] md:-bottom-80 md:-z-[1]"
          alt="pattern"
          aria-hidden="true"
        />
      </picture>

      <div className="container w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-start gap-7 relative after:hidden md:after:block after:absolute after:top-0 after:h-[1px] after:w-[15%] after:bg-white">
        <div className="grid gap-10 items-center justify-items-center md:justify-items-start px-5 py-20 md:p-0 order-last md:order-first">
          <h1 className="font-heading md:mt-16 text-6xl md:text-6xl leading-[64px] text-center md:text-start">
            Humanizing your insurance.
          </h1>
          <p className="text-base leading-6 text-center md:text-start">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </p>
          <CtaButton />
        </div>
        <div className="md:absolute right-0 top-0">
          <picture>
            <source srcSet={imageIntroMobile} media="(max-width: 70em)" />
            <img
              className="w-full max-w-full"
              src={imageIntroDesktop}
              alt="family picture"
              role="presentation"
              width={540}
              height={650}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
