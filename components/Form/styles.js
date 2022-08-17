import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 auto;
  padding: 1rem 2rem;
  max-width: 360px;
  height: auto;
  background-color: rgba(34, 55, 148, 0.3);
  border-radius: 10px;

  @media (min-width: 375px) and (max-width: 900px) {
    max-width: 270px;
    height: auto;
  }
`;

export const FormBigText = styled.span`
  font-weight: 700;
  font-family: "Roboto", "sans-serif";
  font-size: 2rem;
  color: #edf6f9;

  margin: 1rem auto;
  @media (min-width: 375px) and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const FormSmallText = styled.span`
  font-weight: 400;
  font-family: "Roboto", "sans-serif";
  font-size: 1rem;
  color: #edf6f9;
  text-align: left;

  margin: 0.5rem auto;
  @media (min-width: 375px) and (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  color: red;
  font-size: 0.7rem;
  text-align: center;
`;

export const FormInput = styled.input`
  width: 80%;
  height: 2rem;
  background-color: #edf6f9;
  color: #000;
  margin-bottom: 0.7rem;
  border: none;
  border-radius: 4px;

  font-weight: 400;
  font-family: "Roboto", "sans-serif";
  font-size: 0.8rem;

  padding: 0.5rem;
`;

export const CustomFormInput = styled(ReactInputMask)`
  width: 80%;
  height: 2rem;
  background-color: #edf6f9;
  color: #000;
  margin-bottom: 0.7rem;
  border: none;
  border-radius: 4px;

  font-weight: 400;
  font-family: "Roboto", "sans-serif";
  font-size: 0.8rem;

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
  color: #edf6f9;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgb(255, 85, 0);
  }
`;
