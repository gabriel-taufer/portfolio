import './CurriculumVitae.scss';

import React, { useEffect, useRef, useState } from 'react';

import PrintIcon from '@mui/icons-material/Print';
import { Container, Fab, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useReactToPrint } from 'react-to-print';
import MyCareerTimeline from '../MyCareerTimeline';
import MyInfo from '../MyInfo/MyInfo';
import MyTechnologies from '../MyTechnologies';


const CurriculumVitae = () => {
  const { t } = useTranslation()
  const printableRef = useRef(null)

  const [height, setHeight] = useState(0)

  useEffect(() => setHeight(printableRef.current.clientHeight), [])

  const handlePrint = useReactToPrint({
    pageStyle: `@media print {
      @page {
        size: 300mm ${height + 120}px;
        margin: 0;
      }
    }`,
    content: () => printableRef.current,
  });

  return (
    <>
      <Fab
        variant="extended"
        onClick={handlePrint}
        className="no-print print-button"
        style={{ position: 'fixed' }}
      >
        <PrintIcon /> {t('Print Me')}
      </Fab>
      <div className="curriculum-vitae" ref={printableRef}>
        <div className="content">
          <br />
          <MyInfo />
          <Container id="about-me" style={{ textAlign: 'center', marginBottom: '12px' }}>
            <h1>
              {t('About Me')}
            </h1>
            <div className='about-me-text'>
              <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0 }}>
                <p dangerouslySetInnerHTML={{ __html: t("curriculumPresentationParagraph") }} />
              </Container>
            </div>
          </Container>
          <br />
          <MyTechnologies />
          <br />
          <MyCareerTimeline />
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
              {t('See more at')}&nbsp;<Link href="https://taufer.dev" className="my-website-link">https://taufer.dev</Link>
            </h3>
          </Container>
        </div>
      </div>
    </>
  )
}

export default CurriculumVitae;
