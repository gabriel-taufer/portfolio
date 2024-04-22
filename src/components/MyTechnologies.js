import * as React from 'react';

import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MyTechnologies = () => {
  const { t } = useTranslation()
  return (
    <Container id="my-technologies" style={{ textAlign: 'center', marginBottom: '28px', }}>
      <h1>{t('My Skills')}</h1>
      <div className='my-technologies-container'>
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
          {t('techsExperience')}
          <Container style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '18px 0 0 0' }}>
            <div>
              <h3>{t('Languages & others')}</h3>
              <p>Python</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>NodeJS</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div>
              <h3>{t('Frameworks & Libs')}</h3>
              <p>Django & Django REST</p>
              <p>Apache Airflow</p>
              <p>FastAPI</p>
              <p>Flask</p>
              <p>Chalice</p>
              <p>Tornado</p>
              <p>SQLAlchemy</p>
              <p>ReactJS</p>
              <p>NextJS</p>
            </div>
            <div>
              <h3>{t('Databases')}</h3>
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>SQLite</p>
              <p>Redshift</p>
              <p>MongoDB</p>
            </div>
            <div>
              <h3>{t('Other technologies')}</h3>
              <p>Databricks</p>
              <p>Snowflake</p>
              <p>AWS S3</p>
              <p>AWS RDS</p>
              <p>AWS Lambda</p>
              <p>SASS</p>
              <p>Git</p>
              <p>Docker</p>
              <p>Terraform</p>
              <p></p>
            </div>
          </Container>
        </Container>
      </div>
    </Container>
  )
}

export default MyTechnologies;
