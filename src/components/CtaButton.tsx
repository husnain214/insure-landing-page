import PropTypes from 'prop-types';

const CtaButton = ({ variant = 'normal', title = 'view plans' }) => {
  return (
    <a
      href="/"
      className={`px-[28px] py-[12px] border-2 border-white text-white hover:text-neutral-dark ${
        variant === 'nav'
          ? 'md:text-neutral-dark md:hover:text-neutral-light md:border-neutral-dark md:before:bg-neutral-dark'
          : ''
      } text-xl md:text-sm flex-shrink-0 font-bold isolate relative before:absolute before:bg-neutral-light before:inset-0 before:-z-[1] before:w-0 before:transition-[width] before:duration-500 hover:before:w-full uppercase`}
    >
      {title}
    </a>
  );
};

CtaButton.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
};

export default CtaButton;
