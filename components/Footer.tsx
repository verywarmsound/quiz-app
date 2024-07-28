// components/Footer.ts
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const AttributionLink = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
    <FooterContainer>
        <AttributionLink href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">
    Quiz icons created by Freepik - Flaticon
</AttributionLink>
</FooterContainer>
);

export default Footer;
