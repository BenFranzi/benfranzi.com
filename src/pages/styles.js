import styled from 'styled-components';
import { SCREEN_WIDTH } from '../utils/theme';


//// NAV

export const StyledNavigationBar = styled('div')`
  width: min(80%, ${SCREEN_WIDTH.desktop}px);
  display: flex;
  justify-content: right;
  align-items: center;
  height: 92px;
  margin: 0 auto;
`;

export const RightWrapper = styled('div')`
  display: flex;
  gap: 24px;
`;

export const MenuItem = styled('div')`
  opacity: 50%;
  cursor: not-allowed;
  color: ${({theme}) => theme.typography.h1.color};
`;

// Landing

export const StyledLanding = styled('div')`
  height: 60vh;
  margin: 0 auto;
  padding: 10vh;
  width: min(80%, ${SCREEN_WIDTH.desktop}px);
`;

export const LandingLeftWrapper = styled('div')`
  width: min(60%, ${SCREEN_WIDTH.tablet / 2}px);
`;

export const StyledName = styled('div')`
  font-size: 4.5rem;
  color: ${({theme}) => theme.typography.h1.color};
`;

export const StyledDescription = styled('div')`
  font-size: 1.5rem;
  color: ${({theme}) => theme.typography.h1.color};
`;

export const StyledSeparator = styled('div')`
  height: 40px;
  background: darkslateblue;
`;


export const StyledAbout = styled('div')`
  width: min(80%, ${SCREEN_WIDTH.desktop}px);
  background: url('symbol-scatter-haikei.svg');
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 64px;
`;

export const AboutDescription = styled('div')`
  color: ${({theme}) => theme.typography.h1.color};
  font-size: 1.125rem;
  width: min(60%, ${SCREEN_WIDTH.tablet / 2}px);
  text-align: center;
`;

export const SocialsWrapper = styled('div')`
  display: flex;
  gap: 12px;
`

export const EmailLabel = styled('span')`
  font-size: 1.125rem;
  color: ${({theme}) => theme.typography.h1.color};
`;

