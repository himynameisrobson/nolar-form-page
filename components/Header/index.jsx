import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import logo from "../../public/assets/logo1.png";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link href="/">
        <a>
          <Image alt="logo" src={logo} width={75} height={75} />
        </a>
      </Link>
    </S.HeaderContainer>
  );
};

export default Header;
