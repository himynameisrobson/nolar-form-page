import React from "react";
import Form from "../Form";

import * as S from "./styles";

const Main = () => {
  return (
    <>
      <S.MainDiv>
        <S.MainTextContainer>
          <S.MainBigText>This is a text to be displayed</S.MainBigText>
          <S.MainSmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra, arcu in viverra suscipit, est quam efficitur justo, id
            fringilla mi diam sed nibh. Aliquam.
          </S.MainSmallText>
        </S.MainTextContainer>
        <Form />
      </S.MainDiv>
    </>
  );
};

export default Main;
