const CtaButton = () => {
  return (
    <a
      href="/"
      className="px-[28px] py-[12px] border-2 border-white md:border-neutral-dark text-white md:text-neutral-dark hover:text-neutral-dark md:hover:text-neutral-light text-xl md:text-sm font-bold isolate relative before:absolute before:bg-neutral-light md:before:bg-neutral-dark before:inset-0 before:-z-[1] before:w-0 before:transition-[width] before:duration-500 hover:before:w-full"
    >
      View Plans
    </a>
  );
};

export default CtaButton;
