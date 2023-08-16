import { useState } from 'react';
import { close, hamburger, logo, navPattern } from '../assets';
import { navLinks } from '../constants';
import CtaButton from './CtaButton';

const Navbar: React.FC = () => {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  document.documentElement.style.overflow = navToggle
    ? 'hidden'
    : 'hidden scroll';

  return (
    <header className="uppercase px-5">
      <nav className="container w-full max-w-6xl mx-auto py-[20px] flex items-center justify-between relative text-xl md:text-sm tracking-[1.5px]">
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
          <img
            src={!navToggle ? hamburger : close}
            alt={!navToggle ? 'hamburger icon' : 'close icon'}
          />
          <span className="sr-only">main menu</span>
        </button>

        <ul
          id="primary-navigation"
          className={`pt-20 md:pt-0 flex flex-col md:flex-row justify-start md:justify-between items-center gap-7 fixed md:static top-[11%] left-0 right-0 bottom-0 bg-neutral-dark md:bg-transparent ${
            navToggle ? 'visible opacity-100' : 'invisible opacity-0'
          } w-full md:opacity-100 md:w-auto md:visible overflow-hidden transition-all md:transition-none duration-300 z-50 isolate`}
        >
          <img
            src={navPattern}
            className="absolute -bottom-[5em] right-0 left-0 object-cover w-full -z-[-1] md:hidden"
            alt="pattern"
            aria-hidden="true"
          />

          {navLinks.map(({ id, title, href }) => (
            <li
              key={id}
              className="md:hover:text-neutral-dark transition-colors font-bold text-neutral-light md:text-neutral-gray"
            >
              <a href={href}>{title}</a>
            </li>
          ))}

          <CtaButton variant="nav" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
