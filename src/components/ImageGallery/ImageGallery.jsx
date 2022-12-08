import PropTypes from 'prop-types';

import { List } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            openModal={() => openModal(largeImageURL)}
          />
        );
      })}
    </List>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func,
};
