import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  background-image: url("assets/main.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 92vh;
  width: 100%;
  padding: 1.5rem;
  margin: 0;
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const MainBigText = styled.span`
  font-weight: 700;
  font-family: "Roboto", "sans-serif";
  font-size: 3rem;
  color: #ee7c38;
  margin-bottom: 0.5rem;
  text-align: center;

  margin: 0.5 auto;
`;

export const MainSmallText = styled.span`
  font-weight: 400;
  font-family: "Roboto", "sans-serif";
  font-size: 1.5rem;
  color: #ee7c38;
  margin-bottom: 0.5rem;
  text-align: center;

  margin: 0.5 auto;
`;
