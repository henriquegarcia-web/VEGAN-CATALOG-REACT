import React from 'react'
import { 
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  PersonalReference
} from './FooterElements';

import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

import { GreenText } from '../Navbar/NavbarElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Vegan <GreenText>Food</GreenText></SocialLogo>
            <SocialIcons>

              <SocialIconLink href="https://www.linkedin.com/in/henrique-p-garcia/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href="https://github.com/henriquegarcia-web" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                <FaGithub />
              </SocialIconLink>

            </SocialIcons>
            <PersonalReference>
              Projeto desenvolvido por: Henrique P. Garcia
            </PersonalReference>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
