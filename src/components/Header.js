import React from 'react';
import Logo from '../assets/icons/Logo';
import {
  Container,
  Brand,
  DesktopIcon,
  MobileIcon,
  BrandText,
  Title,
  Subtitle,
} from '../styles/components/Header';

export default function Header() {
  // Import this from metadata
  const title = 'Edwin García';
  const subtitle = 'Software developer';

  return (
    <Container>
      <Brand>
        <DesktopIcon>
          <Logo size={80} />
        </DesktopIcon>
        <MobileIcon>
          <Logo />
        </MobileIcon>
        <BrandText>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </BrandText>
      </Brand>
    </Container>
  );
}
