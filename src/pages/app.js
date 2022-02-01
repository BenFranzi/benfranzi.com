import getLang from '../utils/get-lang';
import {
  AboutDescription, EmailLabel,
  LandingLeftWrapper,
  MenuItem,
  RightWrapper, SocialsWrapper, StyledAbout,
  StyledDescription,
  StyledLanding,
  StyledName,
  StyledNavigationBar, StyledSeparator
} from './styles';
import githubLogo from '../assets/svg/github.svg';
import linkedinLogo from '../assets/svg/linkedin.svg';
import twitterLogo from '../assets/svg/twitter.svg';
import getSettings from '../utils/get-settings';

function NavigationBar() {
  const { blog, experiments, pqrg } = getLang().navigationBar;
  const menuItems = [blog, experiments, pqrg].map(item => ({label: item}));


  return (
    <StyledNavigationBar>
      <RightWrapper>
        {menuItems.map(({label}) =>
            <MenuItem>{label}</MenuItem>
        )}
      </RightWrapper>
    </StyledNavigationBar>
  )
}


function Landing() {
  const { title, name, description } = getLang().landing; // todo: from props

  return (
    <StyledLanding>
      <LandingLeftWrapper>
        <StyledName>{title} {name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </LandingLeftWrapper>
    </StyledLanding>
  )
}

function Separator() {
  return (
      <StyledSeparator/>
  )
}

function About() {
  const { about } = getLang().landing; // todo: from props
  const { email } = getSettings().contact; // todo: from props
  const socials = [githubLogo, linkedinLogo, twitterLogo].map(logo => ({logo}))

  return (
    <StyledAbout>
      <AboutDescription>{about}</AboutDescription>
      <SocialsWrapper>
        {socials.map(({logo}) => <img src={logo} alt=""/>)}
      </SocialsWrapper>
      <EmailLabel>{email}</EmailLabel>
    </StyledAbout>
  )
}

function App() {
  const { title, name } = getLang().landing;

  return (
      <div>
        <NavigationBar />
        <Landing />
        <Separator />
        <About />
      </div>
  );
}

export default App;
