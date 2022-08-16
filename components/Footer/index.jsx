import React from "react";
import Link from "next/link";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Text>Nolar.net - 2022</S.Text>
      <S.InnerDiv>
        <Link href="/">
          <a>
            <S.Whatsapp />
          </a>
        </Link>
        <Link href="/">
          <a>
            <S.Instagram />
          </a>
        </Link>
        <Link href="/">
          <a>
            <S.Facebook />
          </a>
        </Link>
      </S.InnerDiv>
    </S.Footer>
  );
};

export default Footer;
