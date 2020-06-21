import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: #feffeb;
`;

export const Title = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  margin-bottom: 16px;

  color: #2a2a2a;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 328px;
  background-color: transparent;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 8px 0;
  margin-bottom: 24px;
`;

export const GoBackButtonText = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  text-align: center;
  text-transform: uppercase;

  color: #2a2a2a;
`;

export const CartSection = styled.View`
  flex: 1;
  align-items: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
  width: 328px;
  background: #7ad5c6;
  border-radius: 8px;
  padding: 8px 0;
  margin: 30px 0;
`;

export const CheckoutButtonText = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  text-align: center;
  text-transform: uppercase;

  color: #feffeb;
`;
