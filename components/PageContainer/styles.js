import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  @media (min-width: 375px) and (max-width: 650px) {
    max-width: 1200px;
  }
`;
