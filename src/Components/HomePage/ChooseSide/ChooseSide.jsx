import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from '@context/ThemeProvider';
import lightImg from './img/lightSide.jpeg';
import darkImg from './img/darkSide.jpg';
import neutralImg from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({ classes, theme, text, img }) => {
  const isTheme = useTheme();
  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Ligth Side',
      img: lightImg,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: darkImg,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: neutralImg,
      classes: styles.item__neutral,
    },
  ];
  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => {
        return (
          <ChooseSideItem
            key={index}
            theme={theme}
            text={text}
            img={img}
            classes={classes}
          />
        );
      })}
    </div>
  );
};

ChooseSide.propTypes = {
  //   text: PropTypes.string,
};

export default ChooseSide;
