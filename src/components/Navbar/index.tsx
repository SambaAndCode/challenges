import React from 'react';
import { Image } from 'react-native';

import { Container, LogoText, NavImage } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <LogoText>Samba!</LogoText>
      <NavImage>
        <Image source={require('../../../assets/carrungi.png')} />
      </NavImage>
    </Container>
  );
};

export default Navbar;
