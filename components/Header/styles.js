import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #edf6f9;
  width: 100%;
  height: 12vh;
  padding: 1rem;

  @media (min-width: 375px) and (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3rem;
    margin: 0 auto;
  }
`;
