
import { Container } from '@mui/material';
import * as React from 'react';

import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation()
  return (
    <Container id="home">
      <div className='about-me-text'>
        <h1>
          {t("heyText")}
        </h1>
        <h2>
          {t("dramaticPhrase")}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: t("presentationParagraph") }} />
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

export default About;