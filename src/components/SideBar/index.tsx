import React from 'react';
import List  from '../List';
import FollowSuggestion  from '../FollowSuggestion';
import News  from '../News';
import StickyBox from 'react-sticky-box';


import { 
  Container, 
  SearchWrapper, 
  SearchInput,
  SerchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SerchIcon />
      </SearchWrapper>

      <StickyBox>
      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion 
            name="Lucas Silva"
            nickname= "@LucasSilva"
            />,
            <FollowSuggestion 
            name="Kleber Silva"
            nickname= "@KleblerSilva"
            />,
            <FollowSuggestion 
            name="Levi Silva"
            nickname= "@LeviSilva"
            />,
            <FollowSuggestion 
            name="João Gabriel"
            nickname= "@JoãoGabriel"
            />,
          ]}
        />
         <List 
          title="Talvez você curta"
          elements={[<News />, <News />, <News /> ]}
        />
      </Body>
      </StickyBox>

      
    </Container>

  );
}

export default SideBar;