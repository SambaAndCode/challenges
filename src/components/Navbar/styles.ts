import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 0 40px;
  background-color: #e68123;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 32px;
`;

export const LogoText = styled.Text`
  /* font-family: Lobster; */
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  color: #feffeb;
`;

export const NavImage = styled.View`
  height: 42px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
