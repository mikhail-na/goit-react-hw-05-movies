import styled from '@emotion/styled';

export const MovieItems = styled.ul`
  list-style: none;
  padding: 0px 20px;
 
`;
export const MovieItem = styled.li`
  font-weight: 700;
  font-size: 18px;

  width:400px;

  background-color:  rgb(62, 62, 239);
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
  border-radius: 14px;

    background-color: #ffc700;
   
  }

  a {
    display: block;
  color:#ffffff;

    text-decoration: none;

    padding: 10px;
  }
`;