import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import api from '../services/api';

interface IBeers {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export default function Home() {
  const [beers, setBeers] = useState<IBeers[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const endpoint = getEndpoint();

    const timeOutId = setTimeout(() => {
      getBeers(endpoint);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [page, search]);

  const getEndpoint = (): string => {
    if (search) {
      return `beers?page${page}&beer_name=${search}`;
    }
    return `beers?page${page}`;
  };

  const getBeers = async (endpoint: string) => {
    try {
      const response = await api.get(endpoint);
      console.log(response);
      setBeers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (text: string) => {
    setPage(1);
    setSearch(text);
  };

  const handlePagination = (number: number) => {
    setPage(page + number);
  };

  return (
    <ScrollView>
      <TextInput value={search} onChangeText={handleSearch} />
      {beers.map(beer => (
        <View key={beer.id}>
          <Text>{beer.name}</Text>
          <Text>{beer.tagline}</Text>
          <Image
            source={{
              uri: `${beer.image_url}`,
            }}
            resizeMode="center"
          ></Image>
        </View>
      ))}
      <TouchableOpacity onPress={() => handlePagination(1)}>
        <Text>Next Page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
