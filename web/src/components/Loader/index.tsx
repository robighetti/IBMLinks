import React from 'react';

import { FadeLoader } from 'react-spinners';

import { Container, Content } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <Content>
        <FadeLoader color="#6c63ff" />
        <h1>Loading...</h1>
      </Content>
    </Container>
  );
};

export default Loader;
