import React from 'react';

import { Container, AlertImage, AlertMessage } from './styles';

const NotFoundAlert = () => {
  return (
    <Container>
      <AlertImage source={require('../../../assets/alert.png')} />
      <AlertMessage>No results. Try again.</AlertMessage>
    </Container>
  );
};

export default NotFoundAlert;
