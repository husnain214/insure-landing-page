const CtaButton = () => {
  return (
    <button className="px-[28px] py-[12px] border-2 border-neutral-dark text-neutral-dark hover:text-neutral-light text-sm font-bold isolate relative before:absolute before:bg-neutral-dark before:inset-0 before:-z-[1] before:w-0 before:transition-[width] before:duration-500 hover:before:w-full">
      View Plans
    </button>
  );
};

export default CtaButton;
