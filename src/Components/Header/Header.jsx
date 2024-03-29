import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from '@context/ThemeProvider';
import Favorite from '@Components/Favorite';
import imgSabers from './img/lightSabers.svg';
import imgFalcon from './img/falcon.svg';
import imgStar from './img/deathStar.svg';

import styles from './Header.module.css';

const Header = () => {
  const [icon, setIcon] = useState(imgStar);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgSabers);
        break;
      case THEME_DARK:
        setIcon(imgStar);
        break;
      case THEME_NEUTRAL:
        setIcon(imgFalcon);
        break;
      default:
        setIcon(imgStar);
    }
  });

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
