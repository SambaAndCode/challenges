import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 32px;
`;

export const ImageBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 328px;
  background-color: #ffffff;
  border: 1px solid #feffeb;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  /* font-family: Nunito; */
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 48px;

  color: #e68123;
`;

export const SubTitle = styled.Text`
  /* font-family: Nunito; */
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 38px;

  color: #2a2a2a;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  background: #7ad5c6;
  border-radius: 8px;
  padding: 8px;
`;

export const ButtonText = styled.Text`
  /* font-family: Nunito; */
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;

  color: #feffeb;
`;
