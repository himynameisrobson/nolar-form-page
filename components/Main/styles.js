import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 75vh;
  width: 80%;
  padding: 2rem;
  margin: 0 auto;

  @media (min-width: 375px) and (max-width: 650px) {
    justify-content: center;
    flex-direction: column;
    min-width: 600px;
    min-height: 1200px;
  }
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  margin: 0 auto;

  @media (min-width: 375px) and (max-width: 900px) {
    margin-top: -10rem;
    margin-bottom: 2rem;
    width: 80%;
  }
`;

export const MainBigText = styled.span`
  font-weight: 700;
  font-family: "Cabin", "sans-serif";
  font-size: 3rem;
  color: #edf6f9;
  /* color: #000; */
  margin-bottom: 0.5rem;
  width: 50%;

  margin: 0.5 auto;

  @media (min-width: 375px) and (max-width: 1100px) {
    font-size: 2.5rem;
  }
`;

export const MainSmallText = styled.span`
  font-weight: 400;
  font-family: "Cabin", "sans-serif";
  font-size: 1rem;
  color: #edf6f9;
  /* color: #000; */
  margin-bottom: 0.5rem;
  width: 50%;

  margin: 0.5 auto;

  @media (min-width: 375px) and (max-width: 1100px) {
    font-size: 0.83rem;
  }
`;
