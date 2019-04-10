import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-areas: 
    "menu main main main main";
`;

export const LeftSide = styled.div`
  grid-area: menu;
  border-right: 1px solid #f1f1f1;
  max-height: 100vh;
  min-height: 100vh;
  box-shadow: 6px -1px 21px -11px rgba(0,0,0,0.75);
`;

export const RightSide = styled.div`
  grid-area: main;
  padding: 20px;
`;