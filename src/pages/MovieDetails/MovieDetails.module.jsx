import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
margin: 24px;
gap: 24px;

 color:#ffffff;
`;

export const DescriptionBox = styled.div``;

export const Title = styled.h2`
font-weight: 700;
font-size: 30px;
color: yellow;
`;

export const List = styled.ul`
display: inline-flex;
gap: 12px;
list-style: none;
margin: 0;
padding: 0;
list-style-type: none;
color:#ffffff;
`;

export const Item = styled.li``;

export const InfoBox = styled.div``;

export const ListInfo = styled.ul`
display: flex;
flex-direction: column;
gap: 12px;
list-style: none;
margin: 0;
 padding: 0;
list-style-type: none;

`;

export const ListInfoItem = styled.li``;

export const LinkInfo = styled(Link)`
text-decoration: none;
font-weight: 600;
font-size: 18px;
color: #ffffff;

&:hover {
  color: yellow;
}
`;

export const Button = styled.button`
// display: block;
margin-top:20px;
margin-left:20px;
padding: 8px 16px;
font: inherit;
cursor: pointer;
border-radius: 8px;
border: 3px solid #191d1e;
color: #191d1e;
font-weight: 600;
font-size: 20px;
background-color: rgb(26, 26, 43);
color:#ffffff;
  
`;