import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

// import { isMobile } from 'react-device-detect';
// TODO: Think about getting rid of this different view for mobile and desktop
const isMobile = true

const CompanyIcon = ({href, src, width = '32px'}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
      <img src={src} alt={src} width={width} style={{ borderRadius: '300px' }} />
    </a>
  )
}

const LumenaltaTimelineIcon = ({ width }) => <CompanyIcon href="https://www.linkedin.com/company/lumenalta" src="clevertech_logo.jpeg" width={width} />
const ConcordiaTimelineIcon = ({ width }) => <CompanyIcon href="https://www.linkedin.com/company/concordia-labs" src="concordia_labs_logo.jpeg" width={width} />
const DevelcodeTimelineIcon = ({ width }) => <CompanyIcon href="https://www.linkedin.com/company/develcode" src="develcode_logo.jpeg" width={width} />
const DipsystemTimelineIcon = ({ width }) => <CompanyIcon href="https://www.linkedin.com/in/dipsystem-sistemas-8960241ab/?originalSubdomain=br" src="dipsystem.jpeg" width={width} />


const MainCompanyTimelineItem = ({
  companyName,
  CompanyIconComponent,
  PeriodChildren
}) => {
  return (
    <TimelineItem>
      {
        !isMobile ? (
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="h5"
            fontWeight="bold"
          >
            {companyName}
          </TimelineOppositeContent>
        ) : <TimelineOppositeContent sx={{ display: 'none' }} />
      }

      <TimelineSeparator>
        <TimelineDot color='inherit' >
          <CompanyIconComponent width="48px" />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent sx={{ m: 'auto 0' }}>
        {isMobile && (
          <Typography variant="h5" fontWeight="bold">
            {companyName}
          </Typography>
        )}
        <Typography fontSize={14}>
          <PeriodChildren />
        </Typography>
      </TimelineContent>
    </TimelineItem>
  )
}

const CompanyRoleTimelineItem = ({
  roleName,
  CompanyIconComponent,
  PeriodChildren,
  DescriptionChildren,
  position
}) => {
  return (
    <TimelineItem position={position} sx={{ marginLeft: isMobile ? '27px' : 0 }}>
      {isMobile && <TimelineOppositeContent style={{ display: 'none' }} />}
      <TimelineSeparator>
        <TimelineConnector style={{backgroundColor: '#666666'}} />
        {!isMobile && (
          <>
            <TimelineDot color='inherit' sx={{ m: 'auto 0' }}>
              <CompanyIconComponent />
            </TimelineDot>
            <TimelineConnector style={{backgroundColor: '#666666'}} />
          </>
        )}
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
          {roleName}
        </Typography>
        <PeriodChildren />
        <DescriptionChildren />
      </TimelineContent>
    </TimelineItem>
  )
}

const MyCareerTimeline = () => {
  const { t } = useTranslation()
  return (
    <Container style={{ textAlign: 'center', marginBottom: '28px' }}>
      <h1 id="my-career" style={{margin: 0}}>{t('My Career')}</h1>
      <Timeline position="right" sx={{ padding: 0, margin: 0 }}>

        {/* Lumenalta - main */}
        <MainCompanyTimelineItem
          companyName="Lumenalta (formerly Clevertech)"
          CompanyIconComponent={LumenaltaTimelineIcon}
          PeriodChildren={() => <i>{t('September')} 2021 - <b>{t('the moment')}</b></i>}
        />

        {/* Lumenalta - data engineer */}
        <CompanyRoleTimelineItem
          roleName={t('Data engineer')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              
              <p style={{ margin: '0' }}>{t('lumenalta-dataEngineer-part1')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-dataEngineer-part2')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-dataEngineer-part3')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-dataEngineer-part4')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-dataEngineer-part5')}</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>{t('July')} 2022 - <b>{t('the moment')}</b></small></i>}
          CompanyIconComponent={LumenaltaTimelineIcon}
          position="'alternate-reverse'"
        />

        {/* Lumenalta - python developer */}
        <CompanyRoleTimelineItem
          roleName={t('Python developer')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>{t('lumenalta-pythonDeveloper-part1')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-pythonDeveloper-part2')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-pythonDeveloper-part3')}</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>{t('February')} 2022 - {t('July')} 2022</small></i>}
          CompanyIconComponent={LumenaltaTimelineIcon}
          position='alternate'
        />

        {/* Lumenalta - javascript fullstack developer */}
        <CompanyRoleTimelineItem
          roleName={t('JavaScript fullstack developer')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>{t('lumenalta-javascriptFullstackDeveloper-part1')}</p>
              <p style={{ margin: '0' }}>{t('lumenalta-javascriptFullstackDeveloper-part2')}</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>{t('September')} 2021 - {t('February')} 2022</small></i>}
          CompanyIconComponent={LumenaltaTimelineIcon}
          position='alternate-reverse'
        />


        {/* Develcode - main */}
        <MainCompanyTimelineItem
          companyName="Develcode"
          CompanyIconComponent={DevelcodeTimelineIcon}
          PeriodChildren={() => <i>{t('January')} 2021 - {t('September')} 2021 </i>}
        />

        {/* Develcode - tech lead */}
        <CompanyRoleTimelineItem
          roleName={t('Tech lead')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>{t('develcode-techLead-part1')}</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>{t('July')} 2021 - {t('September')} 2021</small></i>}
          CompanyIconComponent={DevelcodeTimelineIcon}
          position='alternate-reverse'
        />

        {/* Develcode - fullstack developer */}
        <CompanyRoleTimelineItem
          roleName={t('Fullstack developer')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>{t('develcode-fullStackDeveloper-part1')}</p>
              <p style={{ margin: '0' }}>{t('develcode-fullStackDeveloper-part2')}</p>
              <p style={{ margin: '0' }}>{t('develcode-fullStackDeveloper-part3')}</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>{t('January')} 2021 - {t('July')} 2021</small></i>}
          CompanyIconComponent={DevelcodeTimelineIcon}
          position='alternate'
        />


        {/* Concordia - main */}
        <MainCompanyTimelineItem
          companyName="Concordia Labs"
          CompanyIconComponent={ConcordiaTimelineIcon}
          PeriodChildren={() => <i>{t('August')} 2020 - <b>{t('the moment')}</b></i>}
        />

        {/* Concordia - fullstack developer */}
        <CompanyRoleTimelineItem
          roleName={t('Fullstack developer')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              
              <p style={{ margin: '0' }}>{t('concordia-fullStackDeveloper-part1')}</p>
              <p style={{ margin: '0' }}>{t('concordia-fullStackDeveloper-part2')}</p>
              <p style={{ margin: '0' }}>{t('concordia-fullStackDeveloper-part3')}</p>
              <p style={{ margin: '0' }}>{t('concordia-fullStackDeveloper-part4')}</p>
            </Typography>
          )}
          PeriodChildren={() => { }}
          CompanyIconComponent={ConcordiaTimelineIcon}
          position='alternate'
        />


        {/* Dipsystem - main */}
        <MainCompanyTimelineItem
          companyName="Hapolo (DipSystem)"
          CompanyIconComponent={DipsystemTimelineIcon}
          PeriodChildren={() => <i>{t('March')} 2018 - {t('January')} 2021</i>}
        />


        {/* Dipsystem - fullstack developer */}
        <CompanyRoleTimelineItem
          roleName={t('Fullstack developer')}
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>{t('dipsystem-fullStackDeveloper-part1')}</p>
              <p style={{ margin: '0' }}>{t('dipsystem-fullStackDeveloper-part2')}</p>
            </Typography>
          )}
          PeriodChildren={() => {}}
          CompanyIconComponent={DipsystemTimelineIcon}
          position='alternate'
        />

      </Timeline>
    </Container>
  );
}

export default MyCareerTimeline
