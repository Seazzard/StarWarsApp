import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiButton.module.css';
import '../index.css';

const UiButton = ({ text, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, styles[theme], classes)}
      classes
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UiButton;
