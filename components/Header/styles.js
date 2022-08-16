import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  min-width: 600px;
  height: auto;
  margin: 1rem 0;
  padding: 1rem 1rem;

  @media (min-width: 375px) and (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3rem;
    margin: 0 auto;
  }
`;
