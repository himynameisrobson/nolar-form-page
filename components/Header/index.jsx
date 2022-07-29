import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import logo from "../../public/assets/logo.png";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <Link href="/">
          <Image alt="logo" src={logo} width={75} height={75} />
        </Link>
      </S.InnerContainer>
      <S.ContactContainer>
        <S.InnerContainer>
          <S.WhatsappIcon />
          <S.HeaderText>(18) 99999-9999</S.HeaderText>
        </S.InnerContainer>
        <S.InnerContainer>
          <S.EmailIcon />
          <S.HeaderText>email@email.com.br</S.HeaderText>
        </S.InnerContainer>
      </S.ContactContainer>
    </S.HeaderContainer>
  );
};

export default Header;
