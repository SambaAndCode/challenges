import React from 'react';

import { Container, AlertImage, AlertMessage } from './styles';

const NotFoundAlert = () => {
  return (
    <Container>
      <AlertImage source={require('../../../assets/alert.png')} />
      <AlertMessage>
        Sua busca não retornou resultados.{'\n'}Tente novamente.
      </AlertMessage>
    </Container>
  );
};

export default NotFoundAlert;
