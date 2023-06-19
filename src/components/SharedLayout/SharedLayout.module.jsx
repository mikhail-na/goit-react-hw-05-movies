import styled from "@emotion/styled";

import { NavLink } from 'react-router-dom';


export const Navigation = styled.nav`
// display:block;
border:1px solid yellow;
`

export const NavigationList = styled.ul`
display:flex;
list-style: none;

`

export const NavigationItem = styled.li`
font-weight: 700;
font-size: 30px;
margin-left: 50px;
`

export const NavigationLink = styled(NavLink)`
text-decoration: none;
&:hover,
&.active {
    color: yellow;
  }
`;