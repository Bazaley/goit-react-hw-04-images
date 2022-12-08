import PropTypes from 'prop-types';

import { useState } from 'react';
import { Button, Input, Wrapper } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Button type="submit">
          <span>Search</span>
        </Button>

        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Wrapper>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
