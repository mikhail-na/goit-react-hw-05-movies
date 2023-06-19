import { useState } from 'react';
import { Form, Input, Button } from './Form.module';

const SearchForm = ({ setSearchQuery }) => {
    const [query, setQuery] = useState('');
    
    const handleInputChange = ({ target: { value } }) => {
        setQuery(value);
    };

  const handleSubmit = e => {
    e.preventDefault();
      setSearchQuery({ query });
      setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Please enter movie name.."
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;