import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import {
  Container,
  ImageBox,
  Title,
  SubTitle,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

interface IProps {
  id?: number;
  name?: string;
  tagline?: string;
  image?: string;
}

const BeerCard: React.FC<IProps> = ({ name, tagline, image, id }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ImageBox>
        <Image
          source={{ uri: image }}
          style={{
            width: 298,
            height: 298,
            resizeMode: 'contain',
          }}
        />
      </ImageBox>
      <Title>{name}</Title>
      <SubTitle>{tagline}</SubTitle>
      <ButtonContainer>
        <Button onPress={() => navigate('Beer', { id })}>
          <ButtonText>See More</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default BeerCard;
