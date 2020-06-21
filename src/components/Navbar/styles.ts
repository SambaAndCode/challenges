import styled from 'styled-components/native';

interface IProps {
  isLight?: boolean;
}

export const Container = styled.View<IProps>`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 0 40px;
  background-color: ${props => (props.isLight ? '#feffeb' : '#e68123')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 32px;
`;

export const LogoText = styled.Text<IProps>`
  font-family: Lobster_400Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  color: ${props => (props.isLight ? '#e68123' : '#feffeb')};
`;

export const NavImage = styled.TouchableWithoutFeedback`
  height: 42px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const CartNumberView = styled.View`
  background-color: #7ad5c6;
  width: 20px;
  height: 20px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: -8px;
`;

export const CartNumber = styled.Text`
  font-family: Nunito_700Bold;
  color: #feffeb;
`;
