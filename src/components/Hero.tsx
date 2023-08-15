import { imageIntroDesktop, imageIntroMobile } from '../assets';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white min-h-[70vh] grid place-content-center md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-start gap-7 relative after:hidden md:after:block after:absolute after:top-0 after:h-[1px] after:w-[15%] after:bg-white">
        <div className="grid gap-10 items-center justify-items-start p-4 md:p-0">
          <h1 className="font-heading mt-16 text-5xl md:text-7xl leading-[64px]">
            Humanizing your insurance.
          </h1>
          <p className="text-base leading-6">
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
