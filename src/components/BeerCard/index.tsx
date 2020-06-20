import React from 'react';
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
  name?: string;
  tagline?: string;
  image?: string;
}

const BeerCard: React.FC<IProps> = ({ name, tagline, image }) => {
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
        <Button>
          <ButtonText>See More</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default BeerCard;
