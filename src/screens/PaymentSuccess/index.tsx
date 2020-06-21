import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';

import {
  Container,
  Title,
  LogoWrapper,
  Logo,
  ButtonContainer,
  ButtonText,
} from './styles';

const PaymentSuccess: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Navbar isLight />
      <LogoWrapper>
        <Logo source={require('../../../assets/logo-payment.png')} />
      </LogoWrapper>
      <Title>Congrats! {'\n'}🎉</Title>
      <ButtonContainer onPress={() => navigation.navigate('Home')}>
        <ButtonText>Return to home</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default PaymentSuccess;
