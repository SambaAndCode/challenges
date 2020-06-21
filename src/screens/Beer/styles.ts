import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: #feffeb;
`;

export const Container = styled.View`
  padding: 40px 42px 0;
  background: #7ad5c6;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const CenteredSection = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 48px 0;
`;

export const Title = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;

  color: #feffeb;
`;

export const SubTitle = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 10px;

  color: #2a2a2a;
`;

export const Description = styled.Text`
  font-family: Nunito_400Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 20px;

  color: #2a2a2a;
`;

export const Ingredients = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 10px;

  color: #feffeb;
`;

export const Strong = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #2a2a2a;
`;

export const Ingredient = styled.Text`
  font-family: Nunito_400Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #2a2a2a;
`;

export const Button = styled.TouchableOpacity`
  width: 160px;
  padding: 8px 0;
  background: #feffeb;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  text-align: center;
  text-transform: uppercase;

  color: #e68123;
`;
