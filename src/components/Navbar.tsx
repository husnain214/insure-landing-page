import { useState } from 'react';
import { hamburger, logo } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import CtaButton from './CtaButton';

const Navbar: React.FC = () => {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  return (
    <header className="uppercase">
      <nav
        className={`${styles.container} py-[30px] flex items-center justify-between relative`}
      >
        <div>
          <img
            className="max-w-max"
            height="18px"
            width="111px"
            src={logo}
            alt="logo"
          />
        </div>

        <button
          className="md:hidden"
          onClick={() => setNavToggle((prev) => !prev)}
        >
          <img src={hamburger} alt="hamburger icon" />
        </button>

        <ul
          className={`${
            navToggle ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row justify-center md:justify-between items-center gap-7 absolute md:static inset-0 top-[100%] h-screen md:h-auto`}
        >
          {navLinks.map(({ id, title, href }) => (
            <a
              key={id}
              href={href}
              className="hover:text-neutral-dark transition-colors font-bold text-neutral-gray text-sm"
            >
              {title}
            </a>
          ))}

          <CtaButton />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
