import React, { useContext } from 'react';
import { Image } from 'react-native';

import { CartContext } from '../../contexts/CartContext';

interface IBeerOnCart {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  quantity: number;
}
import {
  Container,
  ImageFrame,
  InfoSection,
  Title,
  SubTitle,
  ControlsSection,
  ControlButton,
  ControlButtonSignal,
  QuantityBox,
  Quantity,
} from './styles';

const BeerOnCart: React.FC<IBeerOnCart> = ({
  id,
  name,
  tagline,
  image_url,
  quantity,
}) => {
  const { handleAddBeer, handleDeleteBeer } = useContext(CartContext);
  const beer = { id, name, tagline, image_url, quantity };

  return (
    <Container>
      <ImageFrame>
        <Image
          source={{ uri: image_url }}
          style={{ width: 170, height: 170 }}
          resizeMode="contain"
        />
      </ImageFrame>
      <InfoSection>
        <Title>{name}</Title>
        <SubTitle>{tagline}</SubTitle>
      </InfoSection>
      <ControlsSection>
        <ControlButton onPress={() => handleDeleteBeer(id)}>
          <ControlButtonSignal>-</ControlButtonSignal>
        </ControlButton>
        <QuantityBox>
          <Quantity>{quantity}</Quantity>
        </QuantityBox>
        <ControlButton onPress={() => handleAddBeer(beer)}>
          <ControlButtonSignal>+</ControlButtonSignal>
        </ControlButton>
      </ControlsSection>
    </Container>
  );
};

export default BeerOnCart;
