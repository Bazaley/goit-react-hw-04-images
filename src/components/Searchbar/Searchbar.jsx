import PropTypes from 'prop-types';

import { Head } from './Searchbar.styled';
import SearchForm from '../SearchForm/SearchForm';

export const Header = ({ onSubmit }) => {
  return (
    <Head>
      <SearchForm onSubmit={onSubmit} />
    </Head>
  );
};

Header.propTypes = {
  onSubmit: PropTypes.func,
};
