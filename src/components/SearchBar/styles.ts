import styled from 'styled-components/native';

export const Input = styled.TextInput`
  flex: 1;
  background: #e68123;
  border: 1px solid #acacac;
  padding: 8px 27px;
  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #feffeb;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-right: 16px;
  font-family: Nunito_700Bold;
`;

export const Magnifier = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #fefeea;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  margin-bottom: 40px;
`;
