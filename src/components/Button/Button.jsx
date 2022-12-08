import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ text, onLoadeMore }) => {
  return (
    <Btn type="button" onClick={onLoadeMore}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onLoadeMore: PropTypes.func,
};
