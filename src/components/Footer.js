import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  height: 50px;
  display: flex;
  background: #121212;
  padding: 2em;
  justify-content: space-around;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Social style={{ fontSize: "25px", color: "#ffffff" }}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faWhatsapp} />
      </Social>
      <Links style={{ color: "#ffffff" }}>
        <div>Terms of condition</div>
        <div>Imprint</div>
        <div>Terms & Conditions</div>
      </Links>
    </FooterContainer>
  );
}
