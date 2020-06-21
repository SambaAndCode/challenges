import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import BeerOnCart from '../../components/BeerOnCart';

import { CartContext } from '../../contexts/CartContext';

import {
  Wrapper,
  Title,
  CartSection,
  ButtonContainer,
  GoBackButton,
  GoBackButtonText,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);
  return (
    <Wrapper>
      <Navbar />
      <Title>Order review</Title>
      <ButtonContainer>
        <GoBackButton onPress={() => navigation.navigate('Home')}>
          <GoBackButtonText>Continue shopping</GoBackButtonText>
        </GoBackButton>
      </ButtonContainer>
      <CartSection>
        {cart.map(beer => (
          <BeerOnCart key={beer.id} {...beer} />
        ))}
      </CartSection>
      <ButtonContainer>
        <CheckoutButton>
          <CheckoutButtonText>Pay</CheckoutButtonText>
        </CheckoutButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Cart;
