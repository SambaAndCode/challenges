import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #e68123;
  width: 362px;
  height: 385px;
  align-items: center;
  margin-bottom: 24px;
`;

export const ImageFrame = styled.View`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  margin: 16px 0;
  justify-content: center;
  align-items: center;

  border: 0.6px solid #feffeb;
  box-shadow: 0px 2.4px 4.9px rgba(0, 0, 0, 0.15);
  border-radius: 9.8px;
`;

export const InfoSection = styled.View`
  width: 282px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;

  color: #e68123;
`;

export const SubTitle = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #2a2a2a;
`;

export const ControlsSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ControlButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  background-color: #7ad5c6;
  margin: 0 16px;
`;

export const ControlButtonSignal = styled.Text`
  color: #feffeb;
  font-family: Nunito_700Bold;
  font-size: 17px;
  font-weight: bold;
`;

export const QuantityBox = styled.View`
  width: 40px;
  height: 40px;
  border: 1px solid #7ad5c6;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.Text`
  font-family: Nunito_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #2a2a2a;
`;
