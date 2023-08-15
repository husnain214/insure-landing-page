import { features } from '../constants';

const Features = () => {
  return (
    <section className="pt-3 md:pt-40">
      <div className="container pt-5 mx-auto relative after:hidden md:after:block after:absolute after:top-0 after:h-[1px] after:w-[15%] after:bg-accent">
        <h2 className="font-heading mt-10 mb-20 text-5xl md:text-7xl leading-[64px] text-center md:text-start">
          We’re different
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
          {features.map(({ id, content, title, img }) => (
            <article
              key={id}
              className="grid text-center md:text-start justify-items-center md:justify-items-start"
            >
              <div className="mb-10">
                <img src={img} alt="" />
              </div>
              <h3 className="font-heading text-3xl mb-6">{title}</h3>
              <p className="text-neutral-gray">{content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
