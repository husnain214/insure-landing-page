import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-neutral-light mt-[150px] py-16 uppercase">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 mb-10 pb-10 border-b-[1px] border-gray-300">
          <a href="/">
            <img
              className="max-w-max"
              height="18px"
              width="111px"
              src={logo}
              alt="logo"
            />
          </a>

          <ul className="flex justify-between items-center gap-5">
            {socialMedia.map(({ id, link, name, icon }) => (
              <li key={id}>
                <a href={link}>
                  <span className="sr-only">{name}</span>
                  <img src={icon} alt={name} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="flex flex-col md:flex-row justify-between items-center tracking-[1.5px]">
          {footerLinks.map(({ id, title, links }, index) => (
            <div key={id}>
              <h2
                className={`pb-6 text-neutral-gray text-center md:text-start ${
                  index === 0 ? '' : 'mt-10'
                }`}
              >
                {title}
              </h2>
              <ul className="flex flex-col justify-center items-center md:items-start gap-2">
                {links.map(({ link, name }, index) => (
                  <li key={index}>
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
