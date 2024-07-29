import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: rgba(241, 241, 241, 0.5); /* Light grey, almost invisible */
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
        <p>Made by Olga Korpacheva</p>
    </FooterContainer>
);

export default Footer;
