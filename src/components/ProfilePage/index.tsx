import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton,
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
             
          <h1>Lucas Silva</h1>
          <h2>@SenhorL</h2>

          <p> 
            Dev front-end
          </p>

          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido (a) em 31 de Março de 2000
            </li>
          </ul>

        <Followage>
          <span>
            <strong>100</strong> Seguindo 
          </span>
          <span>
            <strong>200</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>

  );
}

export default ProfilePage;
