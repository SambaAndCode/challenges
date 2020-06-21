import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import BeerCard from '../../components/BeerCard';
import NotFoundAlert from '../../components/NotFoundAlert';

import { Container, LogoWrapper, Logo } from './styles';

import api from '../../services/api';

interface IBeer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

const Home: React.FC = () => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [search, setSearch] = useState('');
  const [noBeers, setNoBeers] = useState(false);

  useEffect(() => {
    if (!search) {
      getBeers('beers');
    }
  }, [search]);

  const getBeers = async (endpoint: string) => {
    try {
      const response = await api.get(endpoint);
      setBeers(response.data);

      response.data.length ? setNoBeers(false) : setNoBeers(true);
    } catch {
      setBeers([]);
      setNoBeers(true);
    }
  };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const handleFilter = () => {
    if (!search) return;
    getBeers(`beers?beer_name=${search}`);
  };

  return (
    <Container>
      <Navbar />
      <LogoWrapper>
        <Logo source={require('../../../assets/logo-light.png')} />
      </LogoWrapper>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
      />
      {noBeers && <NotFoundAlert />}
      {beers.map(beer => (
        <BeerCard
          key={beer.id}
          id={beer.id}
          name={beer.name}
          tagline={beer.tagline}
          image={beer.image_url}
        />
      ))}
    </Container>
  );
};

export default Home;
