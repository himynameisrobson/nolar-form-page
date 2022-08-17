import React from "react";
// import Link from "next/link";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Text>Nolar.net - 2022</S.Text>
      <S.InnerDiv>
        <a href="https://wa.me/message/2SMP3QHFMCJZK1" target="_blank">
          <S.Whatsapp />
        </a>

        <a href="https://www.instagram.com/nolar.net_/" target="_blank">
          <S.Instagram />
        </a>

        <a href="https://www.facebook.com/nolar.net" target="_blank">
          <S.Facebook />
        </a>
      </S.InnerDiv>
    </S.Footer>
  );
};

export default Footer;
