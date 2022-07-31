import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("assets/main.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 92vh;
  width: 100%;
  padding: 2rem;

  @media (min-width: 375px) and (max-width: 650px) {
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    background-size: cover;
    background-position: center;
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

  @media (min-width: 375px) and (max-width: 900px) {
    margin-top: -5rem;
    margin-bottom: 2rem;
    width: 80%;
  }
`;

export const MainBigText = styled.span`
  -webkit-text-stroke: 0.25px rgb(2, 62, 138, 0.5);
  text-shadow: -1px 0 rgb(2, 62, 138, 0.5), 0 1px rgb(2, 62, 138, 0.5),
    1px 0 rgb(2, 62, 138, 0.5), 0 -1px rgb(2, 62, 138, 0.5);

  font-weight: 700;
  font-family: "Cabin", "sans-serif";
  font-size: 3rem;
  color: #90e0ef;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 50%;

  margin: 0.5 auto;

  @media (min-width: 375px) and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const MainSmallText = styled.span`
  -webkit-text-stroke: 0.25px rgb(2, 62, 138, 0.5);
  text-shadow: -1px 0 rgb(2, 62, 138, 0.5), 0 1px rgb(2, 62, 138, 0.5),
    1px 0 rgb(2, 62, 138, 0.5), 0 -1px rgb(2, 62, 138, 0.5);

  font-weight: 400;
  font-family: "Cabin", "sans-serif";
  font-size: 1.5rem;
  color: #90e0ef;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 50%;

  margin: 0.5 auto;

  @media (min-width: 375px) and (max-width: 900px) {
    font-size: 1.25rem;
  }
`;
