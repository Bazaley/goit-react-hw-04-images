import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { fetchImages } from '../services/pixabayApi';
import { desiredQueryProperties } from '../Utils/desiredQueryProperties';
import { Header } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { Circles } from 'react-loader-spinner';
import { Notification } from './Notification/Notification';
import { animateScroll as scroll } from 'react-scroll';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [imageModal, setImageModal] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [notification, setNotification] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    async function getImages() {
      if (query) {
        setIsLoader(true);
        setShowButton(false);

        try {
          const {
            data: { hits, totalHits },
          } = await fetchImages(query, page);

          if (!hits.length) {
            setNotification(true);
            setIsLoader(false);
          }

          setIsLoader(false);
          setImages(state => [...state, ...desiredQueryProperties(hits)]);
          setShowButton(page < Math.ceil(totalHits / 12));
        } catch (error) {
          console.log(error.message);
        }
      }
    }

    getImages();
  }, [page, query]);

  const requestHandler = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setShowButton(false);
    setNotification(false);
  };

  const onLoadeMore = e => {
    setPage(state => state + 1);
    scroll.scrollMore(755);
  };

  return (
    <>
      <Header onSubmit={requestHandler} />
      <Section>
        <ImageGallery images={images} openModal={setImageModal} />
        {showButton && <Button text="Loade more" onLoadeMore={onLoadeMore} />}
        {notification && (
          <Notification text="Sorry, no images were found for your search." />
        )}
        {isLoader && (
          <Circles
            height="80"
            width="80"
            color="#4747bc"
            ariaLabel="circles-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
          />
        )}
      </Section>

      {imageModal && <Modal image={imageModal} closeModal={setImageModal} />}
    </>
  );
};

export default App;
