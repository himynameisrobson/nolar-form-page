import React from "react";
import Form from "../Form";

import * as S from "./styles";

const Main = () => {
  return (
    <>
      <S.MainDiv>
        <S.MainTextContainer>
          <S.MainBigText>
            Invista no segmento que mais cresce no mercado
          </S.MainBigText>
          <S.MainSmallText>
            O Nolar atende ao comércio com o sistema de delivery e e-commerce.
            fornecendo aos licenciados um leque de oportunidades.
          </S.MainSmallText>
        </S.MainTextContainer>
        <Form />
      </S.MainDiv>
    </>
  );
};

export default Main;
