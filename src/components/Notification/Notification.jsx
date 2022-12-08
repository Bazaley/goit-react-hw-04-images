import PropTypes from 'prop-types';

import { Paragraph } from './Notification.styled';

export const Notification = ({ text }) => {
  return <Paragraph>{text}</Paragraph>;
};

Notification.propTypes = {
  text: PropTypes.string,
};
