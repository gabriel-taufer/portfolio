import './App.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from 'react';
import MyCareerTimeline from './MyCareerTimeline';


const theme = createTheme({
  pallete: {
    primary: {
      main: '#000'
    },
    info: {
      dark: '#000'
    },
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }

});


const NavBar = () => {
  return (
    <AppBar id="navbar" position="sticky" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          gap: '64px',
        }}>
          {/* eslint-disable-next-line */}
          <a className="link" href="#">
            Home
          </a>
          <a className="link" href="#my-career">
            Career
          </a>
          <a className="link" href="#contact">
            Contact
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const About = () => {
  return (
    <Container id="home">
      <div className='about-me-text'>
        <h1>
          Hey, I'm Gabriel.
        </h1>
        <h3>
          And I love helping people through code.
        </h3>
        <p>
          I'm a dedicated data engineer and consultant who can help you achieve your company goals.
          <br />While having extensive experience with both frontend and backend solutions - by building fullstack web applications - I repeatedly found myself drawn to the intricacies of backend development.
          <br />My biggest tech passion is working with data - extracting, transforming, and harnessing its potential from many different sources to create meaningful value.
        </p>
      </div>
      <div>
        <div className='image-container'>
          {/* TODO: add professional picture */}
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="640"
            src="profile_pic.jpg"
            alt=""
          />
        </div>
      </div>
    </Container>
  )
}

const Contact = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <h1 id="contact">Let's chat</h1>
      <div className='about-me-text'>
        <h3>
          Reach out to me through social media
        </h3>
        <p>
          If you want to talk about career opportunities, discuss about leveling up professionally, or just do some networking, I'm all ears! Don't hesitate to reach out - I'm here to connect, collaborate, and share ideas with like-minded people.
        </p>
        <SocialMediaIcons size="large" />
      </div>
    </Container>
  )
}

const SocialMediaIcons = ({ size = "medium" }) => {
  return (
    <div className="social-media-icons">
      <Link href="https://www.linkedin.com/in/gabriel-taufer-91ab561a0/" target="_blank" rel="noreferrer" className="linkedin-icon">
        <LinkedInIcon fontSize={size} />
      </Link>
      <Link href="https://github.com/gabriel-taufer" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize={size} />
      </Link>
      <Link href="https://www.instagram.com/gabriel.taufer" target="_blank" rel="noreferrer" className="instagram-icon">
        <InstagramIcon fontSize={size} />
      </Link>
    </div>
  )
}

const Divider = () => {
  return (
    <div style={{ width: '50%', height: '1px', margin: '50px 0 50px 25%', backgroundColor: 'white' }}></div>
  )
}

const Footer = () => {
  return (
    <footer id="footer">
      {/* <SocialMediaIcons /> */}
      <br />
      <br />
      <br />
      {/* <p id='copyright-text'>© All Rights Reserved.</p> */}
    </footer>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <div className="content">
          <NavBar />
          <About />
          <Divider />
          <MyCareerTimeline />
          <Divider />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
