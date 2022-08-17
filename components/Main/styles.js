import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 75vh;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  @media (min-width: 375px) and (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
    min-width: 600px;
    min-height: 1300px;
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
    margin-bottom: 2rem 1rem;
    width: 80%;
  }
`;

export const MainBigText = styled.span`
  font-weight: 700;
  font-family: "Cabin", "sans-serif";
  font-size: 3rem;
  color: #edf6f9;
  margin-bottom: 0.5rem;
  width: 50%;

  margin: 0.5 auto;

  @media (min-width: 375px) and (max-width: 900px) {
    font-size: 2.7rem;
    word-wrap: break-word;
  }
`;

export const MainSmallText = styled.span`
  font-weight: 500;
  font-family: "Cabin", "sans-serif";
  font-size: 1.3rem;
  color: #ccc;
  width: 50%;

  margin: 0.5 auto;

  @media (min-width: 375px) and (max-width: 900px) {
    margin-bottom: 2rem;
    word-wrap: break-word;
    color: #3a473f;
  }
`;
