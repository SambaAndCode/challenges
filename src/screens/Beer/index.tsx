import React, { useState, useEffect, useContext } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import { ScrollView, Text, Image } from 'react-native';
import Navbar from '../../components/Navbar';

import { CartContext } from '../../contexts/CartContext';

import api from '../../services/api';

interface IParams {
  id: number;
}

interface IAmount {
  value: number;
  unit: string;
}

interface IMalt {
  name: string;
  amount: IAmount;
}

interface IIngredients {
  malt: IMalt[];
  yeast: string;
}

interface IBeer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  description: string;
  ingredients: IIngredients;
}

import {
  Wrapper,
  Container,
  Title,
  SubTitle,
  Description,
  Ingredients,
  Strong,
  Ingredient,
  CenteredSection,
  Button,
  ButtonText,
} from './styles';

const Beer = () => {
  const [beer, setBeer] = useState<IBeer>();

  const route = useRoute();
  const navigation = useNavigation();
  const { handleAddBeer } = useContext(CartContext);

  useEffect(() => {
    const { id } = route.params as IParams;
    getBeer(String(id));
  }, []);

  const getBeer = async (id: string) => {
    try {
      const response = await api.get(`beers/${id}`);
      setBeer(response.data[0]);
    } catch {
      navigation.navigate('Home');
    }
  };

  return (
    <Wrapper>
      <Navbar />
      <CenteredSection>
        <Image
          source={{ uri: beer?.image_url }}
          style={{
            width: 298,
            height: 298,
            resizeMode: 'contain',
          }}
        />
      </CenteredSection>
      <Container>
        <Title>{beer?.name}</Title>
        <SubTitle>{beer?.tagline}</SubTitle>

        <Description>{beer?.description}</Description>
        <Ingredients>Ingredients</Ingredients>
        {beer?.ingredients.malt.map((ingredient: IMalt) => (
          <Ingredient key={ingredient.name}>
            <Strong>{ingredient.name}: </Strong>
            {ingredient.amount.value} {ingredient.amount.unit}
          </Ingredient>
        ))}
        <Ingredient>
          <Strong>Yeast: </Strong>
          {beer?.ingredients.yeast}
        </Ingredient>
        <CenteredSection>
          {beer && (
            <Button
              onPress={() => {
                handleAddBeer(beer);
                navigation.navigate('Cart');
              }}
            >
              <ButtonText>Buy</ButtonText>
            </Button>
          )}
        </CenteredSection>
      </Container>
    </Wrapper>
  );
};

export default Beer;
