import './MyInfo.scss';

import React from 'react';

import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

import { Container, Link } from '@mui/material';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { MyGitHubIcon, MyGmailIcon, MyInstagramIcon, MyLinkedinIcon } from '../Contact';

import { usePageViewStore } from '../../store';


const MyInfo = () => {
  const { t } = useTranslation()
  const { curriculumVitaeView, setCurriculumVitaeView } = usePageViewStore()

  return (
    <div id="my-info">
      <Container className="my-info-container">
        <div className='my-info'>
          <h1>
            Gabriel Taufer
          </h1>
          <h2>
            {t('Data engineer and Fullstack developer')}
          </h2>
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0 }}>
            <Link href="https://maps.app.goo.gl/FMsKZo6RkKjHnyWQ8" target="_blank" rel="noreferrer" className='social-media-icon'>
              <LocationOnIcon />
              São Marcos, Rio Grande do Sul, Brazil.
            </Link>
            <MyLinkedinIcon text="Gabriel Taufer" />
            <MyGitHubIcon text="gabriel-taufer" />
            <MyInstagramIcon text="@gabriel.taufer" />
            <MyGmailIcon text="taufergabrielangelo@gmail.com" />
            {(!isMobile && !curriculumVitaeView) && (
              <Link href="#" onClick={() => setCurriculumVitaeView(true)} className="curriculum-vitae-icon social-media-icon">
                <ContactPageIcon /> {t('Curriculum vitae')}
              </Link>
            )}
          </Container>
        </div>
        <div>
          <div className='image-container'>
            {/* TODO: add professional picture */}
            {!isMobile && <img
              loading="lazy"
              decoding="async"
              width="640"
              height="640"
              src="profile_pic.jpg"
              alt=""
            />}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MyInfo;
