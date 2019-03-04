import React from 'react';
import { FooterContainer } from './StyledComponents';

const footer = (<h1>Footer</h1>);

const Footer = () => (footer ? (
  <FooterContainer>{ footer }</FooterContainer>
) : null);

export default Footer;

