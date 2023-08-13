import { useState } from 'react';
import { hamburger, logo } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../style';
import CtaButton from './CtaButton';

const Navbar: React.FC = () => {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  return (
    <header className="uppercase">
      <nav
        className={`${styles.container} py-[30px] flex items-center justify-between relative text-xl md:text-sm`}
      >
        <a href="/">
          <img
            className="max-w-max"
            height="18px"
            width="111px"
            src={logo}
            alt="logo"
          />
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={`${navToggle ? 'true' : 'false'}`}
          className="md:hidden"
          onClick={() => setNavToggle((prev) => !prev)}
        >
          <img src={hamburger} alt="hamburger icon" />
          <span className="sr-only">main menu</span>
        </button>

        <ul
          id="primary-navigation"
          className={`pt-20 md:pt-0 flex flex-col md:flex-row justify-start md:justify-between items-center gap-7 fixed md:static top-24 left-0 right-0 bottom-0 bg-neutral-dark md:bg-transparent ${
            navToggle ? 'visible' : 'invisible'
          } w-full md:w-auto md:visible overflow-hidden transition-transform duration-300`}
        >
          {navLinks.map(({ id, title, href }) => (
            <li
              key={id}
              className="md:hover:text-neutral-dark transition-colors font-bold text-neutral-light md:text-neutral-gray"
            >
              <a href={href}>{title}</a>
            </li>
          ))}

          <CtaButton />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
