import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import {
  Container,
  LogoText,
  NavImage,
  CartNumber,
  CartNumberView,
} from './styles';

interface IProps {
  isLight?: boolean;
}

const Navbar: React.FC<IProps> = ({ isLight = false }) => {
  const { cart } = useContext(CartContext);

  const navigation = useNavigation();

  return (
    <Container isLight={isLight}>
      <LogoText isLight={isLight} onPress={() => navigation.navigate('Home')}>
        Samba!
      </LogoText>
      <View>
        <NavImage onPress={() => navigation.navigate('Cart')}>
          {isLight ? (
            <Image source={require('../../../assets/cart-light.png')} />
          ) : (
            <Image source={require('../../../assets/carrungi.png')} />
          )}
        </NavImage>
        {cart.length ? (
          <CartNumberView>
            <CartNumber>
              {cart.reduce((acc, cur) => acc + cur.quantity, 0)}
            </CartNumber>
          </CartNumberView>
        ) : null}
      </View>
    </Container>
  );
};

export default Navbar;
