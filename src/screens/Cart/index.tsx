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
  const { cart, isOrdered, handlePayment } = useContext(CartContext);
  return (
    <Wrapper>
      <Navbar />
      <Title>Order summary</Title>
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
        {cart.length ? (
          <CheckoutButton
            onPress={() => {
              handlePayment();
              setTimeout(() => navigation.navigate('PaymentSuccess'), 3000);
            }}
          >
            <CheckoutButtonText>
              {isOrdered ? 'Placing order...' : 'Pay'}
            </CheckoutButtonText>
          </CheckoutButton>
        ) : null}
      </ButtonContainer>
    </Wrapper>
  );
};

export default Cart;
