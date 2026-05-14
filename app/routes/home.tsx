import type { Route } from "./+types/home";
import Avatar from '@mui/material/Avatar';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/divider/divider.js';
import flowerImg from '../../flower.png';
import sarahImg from '../../sarah.jpg';
import dogImg from '../../dogs.jpeg';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sarah Twomey" },
  ];
}

export default function Home() {
  return (
    <div className="home">
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

      <div className="education">
        <div>
          I graduated from The University of Missouri in 2018 with degrees in Computer Science and Information Technology and a minor in Math.
        </div>
        <div>
          I work in...
        </div>
        <div>Languages: Python, Javascript, SQL, HTML, CSS, C, C#, C++, Java, PHP.</div>
        <div>Frameworks & Libraries: React, Redux, Angular, Node.js, Angular Material</div>
        <div>Cloud & DevOps: AWS, Docker, Git, CI/CD Pipelines, Sentry, DataDog</div>
        <div>Specializations: RESTful API design, Full Stack architecture, system monitoring, SDLC management</div>
      </div>

      <div>
        <h3>Work Experience</h3>
        <div>
          <h5>AllCampus</h5>
          <h6>Senior Software Engineer</h6>
          <div>January 2025 - Current</div>
          <ul>
            <li>
              Manages all layers of development lifecycle as a Full Stack Software Engineer using React, Python, and PostgreSQL, including designing and building customer-facing web interfaces, developing and maintaining RESTful APIs, and architecting and implementing database schemas and migrations.  
            </li>
            <li>
              Lead the end-to-end technical execution of high-priority epics as primary engineer and project lead, driving stakeholder planning and UI/UX design to deliver scalable production solutions. 
            </li>
            <li>
              Ensure 24/7 system reliability as an on-call engineer, monitoring daily dashboards across AWS, Sentry, DataDog, and CloudWatch to proactively identify anomalies, triage and acknowledge alerts, following established runbooks to investigate and resolve incidents, and coordinates with teammates when escalation is needed.
            </li>
            <li>
              Eliminated manual bottlenecks in specialist assignment workflows by architecting an automated workflow, reducing operation overhead from hours to minutes for internal managers and operational teams.
            </li>
          </ul>
          <h6>Software Engineer II</h6>
          <div>March 2022 - January 2025</div>
          <ul>
            <li>
              Developed critical API integrations (InSync, Regal, ActiveCampaign) to automate lead flows and handle real-time data sync, while architecting a scalable bulk ingestion pipeline in Python that established a standardized framework for third-party integrations and future data imports.
            </li>
            <li>
              Managed Partner Hub, a customer analytics dashboard, by collaborating with design and product to implement features that allow customers to view and interact with product-related data.
            </li>
            <li>
              Collaborated on technical roadmaps, translating business requirements into actionable architectural plans for quarterly initiatives.
            </li>
          </ul>
        </div>
        <div>
          <h5>Hillrom - Software Engineer</h5>
          <div>June 2019 - February 2022</div>
          <ul>
            <li>
              Led frontend team as primary frontend developer,  divided stories between members of the team based on  skill sets, as well as organized meetings and planned  sprints.  
            </li>
            <li>
              Worked with a cross-functional team to architect Hillrom  Precision Locating. 
            </li>
            <li>
              Created four web applications for real-time locating of  staff and equipment in hospitals using Angular Material,  Kendo, and OpenLayers. 
            </li>
            <li>
              Programmed a system for Hillrom Implementation  Engineers to create floor plans and input the locations  of hardware and logical zones for the system to locate  people and equipment. Implemented rule-checks to  ensue hardware is installed properly. Displayed the  logical zones and live locations to the customer. 
            </li>
            <li>
              Delivered 75% code coverage through unit tests and  met key deliverables on time. 
            </li>
          </ul>
        </div>
        <div>
          <h5>Oberd - Project Support Specialist</h5>
          <div>August 2017 - November 2018</div>
          <ul>
            <li>
              Frontend development for Oberd, a software system for  medical data collection that includes the world’s largest  orthopedic database.
            </li>
            <li>
              Developed websites for users to input patient data for  large-scale data collection to be used by all patients of  healthcare providers. 
            </li>
            <li>
              Optimized user interface that led to ease of use and  improved understanding for patients and increased  compliance rate to 75%. 
            </li>
          </ul>
        </div>
        <div>
          <h5>AT&T, Inc. - Software Engineering and Architecture Intern</h5>
          <div>May 2018 - August 2018</div>
          <ul>
            <li>
              Developed a tool that supports general-purpose  capacity planning functionality for the entire DirecTV  platform. 
            </li>
            <li>
              Increased capacity planning and forecasting accuracy  by promoting user collaboration. 
            </li>
            <li>
              Automated data modeling, system modeling and data  simulation. 
            </li>
            <li>
              Implemented frontend redesign using Angular  JavaScript and HTML. 
            </li>
            <li>
              Worked on code base integrated with AT&T Entertainment Group’s developer framework and CICD  pipeline deployed onto AWS cloud.
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <>
    // <nav className="indigo darken-2">
    //     <div className="nav-wrapper">
    //         <a href="#" className="brand-logo">MyBrand</a>
    //         <ul id="nav-mobile" className="right hide-on-med-and-down">
    //             <li><a href="#">Components</a></li>
    //             <li><a href="#">Styles</a></li>
    //             <li><a href="#">Contact</a></li>
    //         </ul>
    //     </div>
    // </nav>

    // <div className="hero z-depth-1">
    //     <h1>Material Design</h1>
    //     <p>Simple, clean, and intuitive.</p>
    //     <button className="btn-large waves-effect waves-light pink accent-3">Get Started</button>
    // </div>

    // <div className="container">
    //     <div className="row">
    //         <div className="col s12 m4">
    //             <div className="card">
    //                 <div className="card-content">
    //                     <span className="card-title">Modern UI</span>
    //                     <p>Built using the official principles of Material Design for a tactile feel.</p>
    //                 </div>
    //                 <div className="card-action">
    //                     <a href="#" className="blue-text text-darken-2">LEARN MORE</a>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="col s12 m4">
    //             <div className="card">
    //                 <div className="card-content">
    //                     <span className="card-title">Responsive</span>
    //                     <p>The grid system ensures your site looks great on phones, tablets, and desktops.</p>
    //                 </div>
    //                 <div className="card-action">
    //                     <a href="#" className="blue-text text-darken-2">DETAILS</a>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="fixed-action-btn">
    //             <a className="btn-floating btn-large pulse red">
    //                 <i className="material-icons">add</i>
    //             </a>
    //         </div>
    //     </div>
    // </div>
    // </>
  );
}
