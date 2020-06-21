import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #7ad5c6;
  flex: 1;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 158px;
  height: 158px;
`;

export const Title = styled.Text`
  font-family: Lobster_400Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  text-align: center;
  margin-bottom: 80px;

  color: #feffeb;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin: 0 35px;
  background-color: #feffeb;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 80px;
  padding: 16px 0;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;

  color: #2a2a2a;
`;
