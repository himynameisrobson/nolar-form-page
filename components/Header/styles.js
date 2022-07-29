import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;
  width: 100%;
  height: 8vw;
  margin: 0.5rem 0;
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
`;

export const EmailIcon = styled(FiMail)`
  width: 20px;
  height: auto;
  color: #ff5500;
  margin-right: 0.2rem;
`;

export const HeaderText = styled.span`
  font-weight: bold;
  font-family: "Roboto", "sans-serif";
  font-size: 0.8rem;
  color: #223794;
  margin-right: 0.5rem;
`;
