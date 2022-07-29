import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 290px;
  height: 50vw;
  background-color: rgba(34, 55, 148, 0.3);
  border-radius: 10px;
`;

export const FormBigText = styled.span`
  font-weight: 700;
  font-family: "Roboto", "sans-serif";
  font-size: 2.5rem;
  color: rgb(255, 85, 0, 0.5);

  margin: 1rem 0;
`;

export const FormSmallText = styled.span`
  font-weight: 400;
  font-family: "Roboto", "sans-serif";
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;

  margin: 0.5 auto;
`;

export const FormInput = styled.input`
  width: 80%;
  height: 2rem;
  background-color: #fff;
  color: #000;
  margin-bottom: 0.7rem;
  border: none;
  border-radius: 4px;

  padding: 0.5rem;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 65%;
  height: 2rem;

  cursor: pointer;
  background-color: rgb(255, 85, 0, 0.8);
  color: #fff;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgb(255, 85, 0);
  }
`;
