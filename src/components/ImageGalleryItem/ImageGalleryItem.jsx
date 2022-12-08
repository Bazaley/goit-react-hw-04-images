import PropTypes from 'prop-types';

import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, openModal }) => {
  return (
    <Item>
      <Img src={url} alt="" onClick={openModal} />
    </Item>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  openModal: PropTypes.func,
};
