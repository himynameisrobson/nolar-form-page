import React from "react";
import * as S from "./styles";

const Form = () => {
  return (
    <S.FormContainer>
      <S.FormBigText>This is a text</S.FormBigText>
      <S.FormSmallText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        nibh nisl. Maecenas sit amet sapien condimentum, varius arcu vitae,
        scelerisque risus. Pellentesque eu dapibus.
      </S.FormSmallText>
      <S.FormInput placeholder="Digite seu nome" />
      <S.FormInput placeholder="Digite seu e-mail" />
      <S.FormInput placeholder="Digite celular" />
      <S.FormButton>Clique aqui</S.FormButton>
    </S.FormContainer>
  );
};

export default Form;
