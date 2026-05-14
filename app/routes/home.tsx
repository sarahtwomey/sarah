import type { Route } from "./+types/home";
import Avatar from '@mui/material/Avatar';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/divider/divider.js';
import flowerImg from '../../flower.png';
import sarahImg from '../../sarah.jpg';
import dogImg from '../../dogs.jpeg';
import { Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sarah Twomey" },
  ];
}

function educationList() {
  return (
    <div className="education">
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Education"
            secondary={
              <React.Fragment>
                {"I graduated from The University of Missouri in 2018 with degrees in Computer Science and Information Technology and a minor in Math."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Languages"
            secondary={
              <React.Fragment>
                {"Python, Javascript, SQL, HTML, CSS, C, C#, C++, Java, PHP"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Frameworks & Libraries"
            secondary={
              <React.Fragment>
                {"React, Redux, Angular, Node.js, Angular Material"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Cloud & DevOps"
            secondary={
              <React.Fragment>
                {'AWS, Docker, Git, CI/CD Pipelines, Sentry, DataDog'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Specializations"
            secondary={
              <React.Fragment>
                {'RESTful API design, Full Stack architecture, system monitoring, SDLC management'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

function titleSection() {
  return (
    <div className="titleSection">
        <div className="left">
          <div className="sarah">
            <Avatar className="avatar" alt="Sarah Twomey" src={sarahImg} sx={{ width: 200, height: 200 }} />
            <div>
              <h1>Sarah Twomey</h1>
              <div className="jobTitle">Senior Software Engineer (Full Stack)</div>
            </div>
          </div>
        </div>
        <div className="right">
            <img className="img" src={flowerImg} />
        </div>
      </div>
  )
}

function aboutSection() {
  return (
    <div className="about">
        <img className="img" src={dogImg} />
        <div className="aboutText">
          <div>
            Hello! I'm Sarah I'm a full stack engineer based in Raleigh, NC. I work in React, Python and PostgreSQL. 
            I am passionate about solving problems and learning new things. I've worked as a front end engineer focusing on the user experience 
            and I currently work as a full stack engineer working on all aspects of the development pipeline.
          </div>
          <br/>
          <div>
            When I am not working you can find me on the tennis court. I love to be outdoors running, camping, hiking and biking. I have two dogs Daisy and Palmer that keep my busy.
            I also love to travel and experiences new places.
          </div>
        </div>
    </div>
  )
}

const allCampusCurrentDetails = [
  'Manages all layers of development lifecycle as a Full Stack Software Engineer using React, Python, and PostgreSQL, including designing and building customer-facing web interfaces, developing and maintaining RESTful APIs, and architecting and implementing database schemas and migrations.',
  'Lead the end-to-end technical execution of high-priority epics as primary engineer and project lead, driving stakeholder planning and UI/UX design to deliver scalable production solutions. ',
  'Ensure 24/7 system reliability as an on-call engineer, monitoring daily dashboards across AWS, Sentry, DataDog, and CloudWatch to proactively identify anomalies, triage and acknowledge alerts, following established runbooks to investigate and resolve incidents, and coordinates with teammates when escalation is needed.',
  'Eliminated manual bottlenecks in specialist assignment workflows by architecting an automated workflow, reducing operation overhead from hours to minutes for internal managers and operational teams.'
]
const allCampusPrevDetails = [
  'Developed critical API integrations (InSync, Regal, ActiveCampaign) to automate lead flows and handle real-time data sync, while architecting a scalable bulk ingestion pipeline in Python that established a standardized framework for third-party integrations and future data imports.',
  'Managed Partner Hub, a customer analytics dashboard, by collaborating with design and product to implement features that allow customers to view and interact with product-related data.',
  'Collaborated on technical roadmaps, translating business requirements into actionable architectural plans for quarterly initiatives.'
]
const hillromDetails = [
  'Led frontend team as primary frontend developer,  divided stories between members of the team based on  skill sets, as well as organized meetings and planned  sprints.',
  'Worked with a cross-functional team to architect Hillrom  Precision Locating.',
  'Created four web applications for real-time locating of  staff and equipment in hospitals using Angular Material,  Kendo, and OpenLayers.',
  'Programmed a system for Hillrom Implementation  Engineers to create floor plans and input the locations  of hardware and logical zones for the system to locate  people and equipment. Implemented rule-checks to  ensue hardware is installed properly. Displayed the  logical zones and live locations to the customer.',
  'Delivered 75% code coverage through unit tests and  met key deliverables on time.'
]
const oberdDetails = [
  'Frontend development for Oberd, a software system for  medical data collection that includes the world’s largest  orthopedic database.',
  'Developed websites for users to input patient data for  large-scale data collection to be used by all patients of  healthcare providers.',
  'Optimized user interface that led to ease of use and  improved understanding for patients and increased  compliance rate to 75%.'
]
const attDetails = [
  'Developed a tool that supports general-purpose  capacity planning functionality for the entire DirecTV  platform.',
  'Increased capacity planning and forecasting accuracy  by promoting user collaboration.',
  'Automated data modeling, system modeling and data  simulation.',
  'Implemented frontend redesign using Angular  JavaScript and HTML.',
  'Worked on code base integrated with AT&T Entertainment Group’s developer framework and CICD  pipeline deployed onto AWS cloud.'
]

function resumeCard(jobTitle: string, company: string, dates: string, bullets: string[]) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {jobTitle}
        </Typography>
        <Typography variant="h5" component="div">
          {company}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{dates}</Typography>
        <Typography variant="body2">
          <ul>
            {bullets.map(bullet => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="home">
      {titleSection()}
      {aboutSection()}
      <br />
      {educationList()}

      <div className="workExperience">
        <h4>Work Experience</h4>
        {resumeCard('Senior Software Engineer', 'AllCampus', 'January 2025 - Current', allCampusCurrentDetails)}
        <br/>
        {resumeCard('Software Engineer II', 'AllCampus', 'March 2022 - January 2025', allCampusPrevDetails)}
        <br/>
        {resumeCard('Software Engineer', 'Hillrom', 'June 2019 - February 2022', hillromDetails)}
        <br/>
        {resumeCard('Project Support Specialist', 'Oberd', 'August 2017 - November 2018', oberdDetails)}
        <br/>
        {resumeCard('Software Engineering and Architecture Intern', 'AT&T, Inc.', 'May 2018 - August 2018', attDetails)}
        
      </div>
    </div>
  );
}
