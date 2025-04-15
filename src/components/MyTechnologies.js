import * as React from 'react';

import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { usePageViewStore } from '../store';

const MyTechnologiesSource = {
  'Languages & Others': {
    "Python": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/python/python-original.svg",
    },
    "JavaScript": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/javascript/javascript-original.svg",
    },
    "TypeScript": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-original.svg",
    },
    "NodeJS": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nodejs/nodejs-original-wordmark.svg",
      invertBackground: true
    },
    "HTML5": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/html5/html5-original.svg",
    },
    "CSS3": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/css3/css3-original.svg",
    },
    "SASS": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/sass/sass-original.svg",
    },
    "TailWind": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg",
    },
  },
  'Frameworks & Libs': {
    "Django": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/django/django-plain.svg",
      invertBackground: true
    },
    "Django Rest": {
      src: "http://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/djangorest/djangorest-original.svg",
      invertBackground: true
    },
    "Apache Airflow": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/apacheairflow/apacheairflow-original.svg",
    },
    "FastAPI": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/fastapi/fastapi-original.svg",
    },
    "Flask": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/flask/flask-original.svg",
      invertBackground: true
    },
    // "Chalice": {
    //   src: "https://camo.githubusercontent.com/4d0b04ba95348b730183a38032f7549a0b25e655e427b15c6102cd177c98c251/68747470733a2f2f6177732e6769746875622e696f2f6368616c6963652f5f696d616765732f6368616c6963652d6c6f676f2d776869746573706163652e706e67",
    // },
    "SQLAlchemy": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/sqlalchemy/sqlalchemy-original.svg",
      invertBackground: true
    },
    "ReactJS": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original.svg",
    },
    "NextJS": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nextjs/nextjs-original.svg",
    },
    "Pandas": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/pandas/pandas-original.svg",
      invertBackground: true
    },
    "Plotly": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/plotly/plotly-original.svg",
    },
    "Selenium": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/selenium/selenium-original.svg",
    },
  },
  "Databases": {
    "PostgreSQL": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg",
    },
    "MySQL": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/mysql/mysql-original.svg",
    },
    "SQLite": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/sqlite/sqlite-original.svg",
    },
    "DynamoDB": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/dynamodb/dynamodb-original.svg",
    },
    "Redis": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/redis/redis-original.svg",
    },
    "RabbitMQ": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/rabbitmq/rabbitmq-original.svg",
    },
    "Redshift": {
      src: "tech_icons/aws_redshift.svg",
    },
    "MongoDB": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/mongodb/mongodb-original.svg",
    },
  },
  "Other technologies": {
    "Docker": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/docker/docker-original.svg"
    },
    "Terraform": {
      src: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/terraform/terraform-original.svg',
    },
    "AWS": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      invertBackground: true
    },
    "AWS Lambda": {
      src: 'tech_icons/aws_lambda.svg',
    },
    "AWS S3": {
      src: 'tech_icons/aws_s3.svg',
    },
    "AWS EC2": {
      src: 'tech_icons/aws_ec2.svg',
    },
    "DigitalOcean": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/digitalocean/digitalocean-original.svg"
    },
    "GCP": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/googlecloud/googlecloud-original.svg"
    },
    "Git": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/git/git-original.svg",
    },
    "GitHub": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg",
      invertBackground: true
    },
    "GitHub Actions": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/githubactions/githubactions-plain.svg"
    },
    "CircleCI": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/circleci/circleci-plain.svg",
      invertBackground: true
    },
    "GraphQL": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/graphql/graphql-plain.svg"
    },
    "Snowflake": {
      src: 'tech_icons/snowflake.svg',
    },
    "CloudFlare": {
      src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/cloudflare/cloudflare-original.svg"
    },
  }
}

const MyTechnologies = () => {
  const { t } = useTranslation()

  const { curriculumVitaeView } = usePageViewStore()
  return (
    <Container id="my-technologies" style={{ textAlign: 'center', marginBottom: '28px', }}>
      <h1>{t('My Skills')}</h1>
      <div className='my-technologies-container'>
        {
          !curriculumVitaeView ? (
            <Container 
              style={{
                display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  padding: '0 50px',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
            >
              {Object.entries(MyTechnologiesSource).map(([title, technologies]) => {
                return (
                  <div 
                    style={{
                      marginBottom: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <h3>{t(title)}</h3>
                    <div 
                      style={{
                        gap: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      {Object.entries(technologies).map(([name, {src, invertBackground=false}]) => {
                        return (
                          <img
                            width={75}
                            src={src}
                            alt={name}
                            style={invertBackground ? {padding: '2px', background: 'white'} : {}} 
                          />
                        )
                        })}
                    </div>
                  </div>
                )
              })}
            </Container>
          ) : (
          <Container style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '18px 0 0 0' }}>
            {Object.entries(MyTechnologiesSource).map(([title, technologies]) => {
                return (
                  <div>
                    <h3>{t(title)}</h3>
                    {Object.entries(technologies).map(([name]) => <p>{name}</p>)}
                  </div>
                )
              })}
            </Container>
          )
        }
      </div>
    </Container>
  )
}

export default MyTechnologies;
