import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

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

const MyCareerTimeline = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <h1 id="my-career">My Career</h1>
      <Timeline position="alternate">

        {/* Lumenalta - main */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="h5"
            fontWeight="bold"
          >
            Lumenalta (formerly Clevertech)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <LumenaltaTimelineIcon width="48px" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography fontSize={14}>
              <i>September 2021 - <b>the moment</b></i>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Lumenalta - data engineer */}
        <TimelineItem position='alternate-reverse'>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <LumenaltaTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              Data engineer
            </Typography>
            <i>
              <small>July 2022 - <b>the moment</b></small>
            </i>
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>Maintaining and building ETL pipelines using Airflow, PostgreSQL, Databricks, Snowflake, AWS Redshift, AWS S3, AWS Lambda, and others.</p>
              <p style={{ margin: '0' }}>Refactored nearly the entire project codebase, resulting in substantial improvements.</p>
              <p style={{ margin: '0' }}>Reduced database utilization by up to 50% and dramatically accelerated crucial data pipelines.</p>
              <p style={{ margin: '0' }}>Streamlined operations by automating and optimizing manual tasks such as email dispatch and report generation.</p>
              <p style={{ margin: '0' }}>Centralized the client's ETL architecture, consolidating dispersed processes into a single, easily managed framework.</p>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Lumenalta - python developer */}
        <TimelineItem position='alternate'>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <LumenaltaTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              Python developer
            </Typography>
            <i><small>February 2022 - July 2022</small></i>
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>
                Development of serverless applications using Chalice, Terraform, and other AWS technologies (SNS, SES, and DynamoDB).
              </p>
              <p style={{ margin: '0' }}>
                Reverse engineering on web SAAS applications.
              </p>
              <p style={{ margin: '0' }}>
                Integrating new partners in the client platform.
              </p>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Lumenalta - javascript fullstack developer */}
        <TimelineItem position='alternate-reverse'>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <LumenaltaTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              JavaScript fullstack developer
            </Typography>
            <i><small>September 2021 - February 2022</small></i>
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>
                Development of web applications using NodeJS, ReactJS and MongoDB.
              </p>
              <p style={{ margin: '0' }}>
                Brief experience with adapting client software to conform with Web Accessibility Guidelines (WCAG/ADA).
              </p>
            </Typography>
          </TimelineContent>
        </TimelineItem>


        {/* Concordia - main */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="h5"
            fontWeight="bold"
          >
            Concordia Labs
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <ConcordiaTimelineIcon width="48px" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography fontSize={14}>
              <i>August 2020 - <b>the moment</b></i>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Concordia - fullstack developer */}
        <TimelineItem position='alternate-reverse'>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <ConcordiaTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              Fullstack developer
            </Typography>
            {/* <i><small>August 2020 - <b>the moment</b></small></i> */}
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>Built web apps using Django (Python), HTML, CSS, JavaScript, and TypeScript, and also dabbled in ReactJS, NodeJS, Angular, and NestJS.</p>
              <p style={{ margin: '0' }}>Had a hand in making hybrid mobile apps with ReactNative and Ionic Cordova.</p>
              <p style={{ margin: '0' }}>Recreated a legacy platform by moving it to the web with newer tech, making it more user-friendly.</p>
              <p style={{ margin: '0' }}>Got good at moving data between different systems and formats for clients.</p>
            </Typography>
          </TimelineContent>
        </TimelineItem>


        {/* Develcode - main */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="h5"
            fontWeight="bold"
          >
            Develcode
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <DevelcodeTimelineIcon width="48px" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography fontSize={14}>
              <i>January 2021 - September 2021 </i>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Develcode - tech lead */}
        <TimelineItem position='alternate-reverse'>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <DevelcodeTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              Tech Lead
            </Typography>
            <i><small>July 2021 - September 2021</small></i>
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}> Technical leader of a project integration development using SpringBoot and ReactJS.</p>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Develcode - fullstack developer */}
        <TimelineItem position='alternate'>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <DevelcodeTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              Fullstack developer
            </Typography>
            <i><small>January 2021 - July 2021</small></i>
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}> Created frontend applications with JavaScript and TypeScript (ReactJS), utilizing HTML and CSS3.</p>
              <p style={{ margin: '0' }}> Developed backend applications using Java (SpringBoot), along with managing databases in PostgreSQL and MySQL.</p>
              <p style={{ margin: '0' }}> Conducted maintenance tasks on a native Android mobile app.</p>
            </Typography>
          </TimelineContent>
        </TimelineItem>


        {/* Dipsystem - main */}
        <TimelineItem position='alternate-reverse'>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="h5"
            fontWeight="bold"
          >
            Hapolo (DipSystem)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <DipsystemTimelineIcon width="48px" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography fontSize={14}>
              <i>March 2018 - January 2021</i>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Dipsystem - fullstack developer */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='inherit'>
              <DipsystemTimelineIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontWeight="bold" sx={{ marginRight: '5px' }}>
              Fullstack developer
            </Typography>
            {/* <i><small>August 2020 - <b>the moment</b></small></i> */}
            <Typography fontSize={14}>
              <p style={{ margin: '0' }}>Helped to port a legacy tracking system to a new version written from scratch and using newer technology.</p>
              <p style={{ margin: '0' }}>Worked on web applications using HTML, CSS3, JavaScript and TypeScript, NodeJS, Python (Django, Tornado), MySQL, Angular and MongoDB.</p>
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Container>
  );
}

export default MyCareerTimeline
