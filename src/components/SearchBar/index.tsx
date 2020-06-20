import React from 'react';
import { Image, TextInputKeyPressEventData } from 'react-native';

import { Input, Magnifier, Container } from './styles';

interface IProps {
  search: string;
  handleSearch: (text: string) => void;
  handleFilter: () => void;
}

const SearchBar: React.FC<IProps> = ({
  search,
  handleSearch,
  handleFilter,
}) => {
  return (
    <Container>
      <Input
        placeholder="Search here"
        placeholderTextColor="#feffeb"
        value={search}
        onChangeText={handleSearch}
        onSubmitEditing={handleFilter}
        returnKeyType="done"
      />
      <Magnifier onPress={handleFilter}>
        <Image source={require('../../../assets/magnifier.png')} />
      </Magnifier>
    </Container>
  );
};

export default SearchBar;
