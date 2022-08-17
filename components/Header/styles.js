import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    270deg,
    transparent,
    rgb(237, 246, 249, 0.8),
    rgb(58, 71, 63, 0.3)
  );
  width: 100%;
  height: 12vh;
  padding: 1rem;

  @media (min-width: 375px) and (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 650px;

    margin: 0 auto;
  }
`;
