import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/13710560?v=4" alt="Avatar" />
      Thomas Lossio
    </User>
  </Container>
);

export default Header;
