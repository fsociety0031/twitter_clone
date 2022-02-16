import React from 'react';

import Tweet from '../Tweet';

import { Container, ContainerFlex, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <>
    <ContainerFlex>
      <Tab>Tweets</Tab>
      <Tab>Tweets & replies</Tab>
      <Tab>Media</Tab>
      <Tab>Likes</Tab>
    </ContainerFlex>

    <Container>
      {<Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets> }
    </Container>
    </>
  );
}

export default Feed; 