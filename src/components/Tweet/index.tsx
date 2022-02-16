import React from 'react';

import { 
  Container, 
  Retweeted, 
  RocketseatIcon, 
  Body, 
  Avatar, 
  Content, 
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
 } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Lucas Silva</strong>
            <span>@SenhorL</span>
            <Dot />
            <time>10 de Jan</time>
          </Header>

          <Description> Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
          <Status>
            <CommentIcon />
            18
          </Status>
          <Status>
            <RetweetIcon />
            999
          </Status>
          <Status>
            <LikeIcon />
            1.8K
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>

  );
};

export default Tweet;