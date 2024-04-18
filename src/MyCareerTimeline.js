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
import { isMobile } from 'react-device-detect';


const LumenaltaTimelineIcon = ({ width = '32px' }) => {
  return (
    <a href="https://www.linkedin.com/company/lumenalta" target="_blank" rel="noreferrer" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
      <img src="clevertech_logo.jpeg" alt="clevertech_logo.jpeg" width={width} style={{ borderRadius: '300px' }} />
    </a>
  )
}

const ConcordiaTimelineIcon = ({ width = '32px' }) => {
  return (
    <a href="https://www.linkedin.com/company/concordia-labs" target="_blank" rel="noreferrer" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
      <img src="concordia_labs_logo.jpeg" alt="concordia_labs_logo.jpeg" width={width} style={{ borderRadius: '300px' }} />
    </a>
  )
}

const DevelcodeTimelineIcon = ({ width = '32px' }) => {
  return (
    <a href="https://www.linkedin.com/company/develcode" target="_blank" rel="noreferrer" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
      <img src="develcode_logo.jpeg" alt="develcode_logo.jpeg" width={width} style={{ borderRadius: '300px' }} />
    </a>
  )
}

const DipsystemTimelineIcon = ({ width = '32px' }) => {
  return (
    <a href="https://www.linkedin.com/in/dipsystem-sistemas-8960241ab/?originalSubdomain=br" target="_blank" rel="noreferrer" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
      <img src="dipsystem.jpeg" alt="dipsystem.jpeg" width={width} style={{ borderRadius: '300px' }} />
    </a>
  )
}


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
  console.log({ isMobile })
  return (
    <Container style={{ textAlign: 'center', marginBottom: '28px' }}>
      <h1 id="my-career">My Career</h1>
      <Timeline position="right" sx={{ padding: 0 }}>

        {/* Lumenalta - main */}
        <MainCompanyTimelineItem
          companyName="Lumenalta (formerly Clevertech)"
          CompanyIconComponent={LumenaltaTimelineIcon}
          PeriodChildren={() => <i>September 2021 - <b>the moment</b></i>}
        />

        {/* Lumenalta - data engineer */}
        <CompanyRoleTimelineItem
          roleName="Data engineer"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>Maintaining and building ETL pipelines using Airflow, PostgreSQL, Databricks, Snowflake, AWS Redshift, AWS S3, AWS Lambda, and other AWS tools.</p>
              <p style={{ margin: '0' }}>Refactored nearly the entire project codebase, resulting in substantial improvements.</p>
              <p style={{ margin: '0' }}>Reduced database storage utilization by up to 50% and dramatically accelerated crucial data pipelines.</p>
              <p style={{ margin: '0' }}>Streamlined operations by automating and optimizing manual tasks such as email dispatch and report generation.</p>
              <p style={{ margin: '0' }}>Centralized the client's ETL architecture, consolidating dispersed processes into a single, easily managed framework.</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>July 2022 - <b>the moment</b></small></i>}
          CompanyIconComponent={LumenaltaTimelineIcon}
          position="'alternate-reverse'"
        />

        {/* Lumenalta - python developer */}
        <CompanyRoleTimelineItem
          roleName="Python developer"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>
                Development of serverless applications using Chalice, Terraform, and other AWS technologies (SNS, SES, and DynamoDB).
              </p>
              <p style={{ margin: '0' }}>
                Reverse engineering on web SAAS applications.
              </p>
              <p style={{ margin: '0' }}>
                Integrating new partners into the client platform.
              </p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>February 2022 - July 2022</small></i>}
          CompanyIconComponent={LumenaltaTimelineIcon}
          position='alternate'
        />

        {/* Lumenalta - javascript fullstack developer */}
        <CompanyRoleTimelineItem
          roleName="JavaScript fullstack developer"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>
                Development of web applications using NodeJS, ReactJS and MongoDB.
              </p>
              <p style={{ margin: '0' }}>
                Brief experience with adapting client software to conform with Web Accessibility Guidelines (WCAG/ADA).
              </p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>September 2021 - February 2022</small></i>}
          CompanyIconComponent={LumenaltaTimelineIcon}
          position='alternate-reverse'
        />


        {/* Develcode - main */}
        <MainCompanyTimelineItem
          companyName="Develcode"
          CompanyIconComponent={DevelcodeTimelineIcon}
          PeriodChildren={() => <i>January 2021 - September 2021 </i>}
        />

        {/* Develcode - tech lead */}
        <CompanyRoleTimelineItem
          roleName="Tech lead"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}> Technical leader of a project integration development using SpringBoot and ReactJS.</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>July 2021 - September 2021</small></i>}
          CompanyIconComponent={DevelcodeTimelineIcon}
          position='alternate-reverse'
        />

        {/* Develcode - fullstack developer */}
        <CompanyRoleTimelineItem
          roleName="Fullstack developer"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}> Created frontend applications with JavaScript and TypeScript (ReactJS), utilizing HTML and CSS3.</p>
              <p style={{ margin: '0' }}> Developed backend applications using Java (SpringBoot), along with managing databases in PostgreSQL and MySQL.</p>
              <p style={{ margin: '0' }}> Conducted maintenance tasks on a native Android mobile app.</p>
            </Typography>
          )}
          PeriodChildren={() => <i><small>January 2021 - July 2021</small></i>}
          CompanyIconComponent={DevelcodeTimelineIcon}
          position='alternate'
        />


        {/* Concordia - main */}
        <MainCompanyTimelineItem
          companyName="Concordia Labs"
          CompanyIconComponent={ConcordiaTimelineIcon}
          PeriodChildren={() => <i>August 2020 - <b>the moment</b></i>}
        />

        {/* Concordia - fullstack developer */}
        <CompanyRoleTimelineItem
          roleName="Fullstack developer"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>Built web apps using Django (Python), HTML, CSS, JavaScript, and TypeScript, and also dabbled in ReactJS, NodeJS, Angular, and NestJS.</p>
              <p style={{ margin: '0' }}>Had a hand in making hybrid mobile apps with ReactNative and Ionic Cordova.</p>
              <p style={{ margin: '0' }}>Recreated a legacy platform by moving it to the web with newer tech, making it more user-friendly.</p>
              <p style={{ margin: '0' }}>Got good at moving data between different systems and formats for clients.</p>
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
          PeriodChildren={() => <i>March 2018 - January 2021</i>}
        />


        {/* Dipsystem - fullstack developer */}
        <CompanyRoleTimelineItem
          roleName="Fullstack developer"
          DescriptionChildren={() => (
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>Helped to port a legacy tracking system to a new version written from scratch and using newer technology.</p>
              <p style={{ margin: '0' }}>Worked on web applications using HTML, CSS3, JavaScript and TypeScript, NodeJS, Python (Django, Tornado), MySQL, Angular and MongoDB.</p>
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
