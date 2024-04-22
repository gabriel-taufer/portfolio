import * as React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Container, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';


const MyLinkedinIcon = ({size, text=''}) => {
  return (
    <Link href="https://www.linkedin.com/in/gabriel-taufer-91ab561a0/" target="_blank" rel="noreferrer" className="linkedin-icon social-media-icon">
      <LinkedInIcon fontSize={size} /> {text}
    </Link>
  )
}

const MyGitHubIcon = ({size, text=''}) => {
  return (
    <Link href="https://github.com/gabriel-taufer" target="_blank" rel="noreferrer" className="github-icon social-media-icon">
      <GitHubIcon fontSize={size} /> {text}
    </Link>
  )
}

const MyInstagramIcon = ({size, text=''}) => {
  return (
    <Link href="https://www.instagram.com/gabriel.taufer" target="_blank" rel="noreferrer" className="instagram-icon social-media-icon">
      <InstagramIcon fontSize={size} /> {text}
    </Link>
  )
}

const MyGmailIcon = ({size, text=''}) => {
  return (
    <Link href="mailto:taufergabrielangelo@gmail.com" target="_blank" rel="noreferrer" className="gmail-icon social-media-icon">
      <MailIcon fontSize={size} /> {text}
    </Link>
  )
}

const SocialMediaIcons = ({ size = "medium" }) => {
  return (
    <div className="social-media-icons">
      <MyLinkedinIcon size={size}/>
      <MyGitHubIcon size={size}/>
      <MyInstagramIcon size={size}/>
    </div>
  )
}

const Contact = () => {
  const { t } = useTranslation()
  return (
    <Container style={{ textAlign: 'center' }}>
      <h1 id="contact">{t("Let's Chat")}</h1>
      <div className='about-me-text'>
        <h3>
          {t("Reach out to me through social media")}
        </h3>
        <p>
          {t("reachMeOutText")}
        </p>
        {/* <SocialMediaIcons size="large" /> */}
      </div>
    </Container>
  )
}

export {
  MyLinkedinIcon,
  MyGitHubIcon,
  MyInstagramIcon,
  MyGmailIcon
}
export default Contact