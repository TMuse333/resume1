import React from 'react';
import styled from 'styled-components';

// Styled Components for footer styling
const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLinkItem = styled.li`
  display: inline;
  margin-right: 20px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;

const FooterText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo>Your Logo</FooterLogo>
        <FooterLinks>
          <FooterLinkItem><FooterLink href="#">Home</FooterLink></FooterLinkItem>
          <FooterLinkItem><FooterLink href="#">About</FooterLink></FooterLinkItem>
          <FooterLinkItem><FooterLink href="#">Services</FooterLink></FooterLinkItem>
          <FooterLinkItem><FooterLink href="#">Contact</FooterLink></FooterLinkItem>
        </FooterLinks>
      </FooterContent>
      <FooterText>&copy; 2023 Your Company Name. All rights reserved.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
