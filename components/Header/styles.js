import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: inherit;
  min-width: 600px;
  max-height: 6vh;
  margin: 0.5rem 0;

  @media (min-width: 375px) and (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 200px;
    min-height: 10vh;

    margin: 0 auto;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  width: 20px;
  height: auto;
  color: #ff5500;
  margin-right: 0.2rem;

  @media (min-width: 375px) and (max-width: 650px) {
    width: 10px;
  }
`;

export const EmailIcon = styled(FiMail)`
  width: 20px;
  height: auto;
  color: #ff5500;
  margin-right: 0.2rem;

  @media (min-width: 375px) and (max-width: 650px) {
    width: 10px;
  }
`;

export const HeaderText = styled.span`
  font-weight: 700;
  font-family: "Roboto", "sans-serif";
  font-size: 0.8rem;
  color: #223794;
  margin-right: 0.5rem;

  @media (min-width: 375px) and (max-width: 650px) {
    font-weight: 700;
    font-family: "Roboto", "sans-serif";
    font-size: 0.5rem;
    color: #223794;
    margin-right: 0.5rem;
  }
`;
