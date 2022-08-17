import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

export const Footer = styled.footer`
  display: flex;
  background-color: transparent;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 2rem;

  height: 7vh;
  min-width: 600px;
`;

export const Text = styled.span`
  font-family: "Roboto", "sans-serif";
  font-weight: 700;
  color: #edf6f9;
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
`;

export const Whatsapp = styled(BsWhatsapp)`
  height: 20px;
  width: 20px;
  color: #22333b;

  margin: 2px;
`;

export const Instagram = styled(SiInstagram)`
  height: 20px;
  width: 20px;
  color: #22333b;

  margin: 2px;
`;

export const Facebook = styled(FaFacebook)`
  height: 20px;
  width: 20px;
  color: #22333b;
  margin: 2px;
`;
