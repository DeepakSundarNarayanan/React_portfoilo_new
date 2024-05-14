import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Nammabnb.png";
import projImg2 from "../assets/img/Java (1).png";
import projImg3 from "../assets/img/Java (1).png";
import projImg4 from "../assets/img/portfolio_one.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Airbnb clone",
      description: "NextJS project",
      imgUrl: projImg1,
    },
    {
      title: "Airline management system",
      description: "Java Project",
      imgUrl: projImg2,
    },
    {
      title: "CrypoTax Calculator",
      description: "Java project",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "React Project",
      imgUrl: projImg4,
    },
    {
      title: "Login page",
      description: "NodeJS application",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "Wihout any Framework",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio Website without using Frameworks",
      description: "JavaScript Project",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The projects undertaken demonstrate a diverse range of skills and technologies. Nammabnb, a full-stack application, facilitated property listing and booking with integrated security measures and precise location display. Vimaan Airline Management showcased Java proficiency, implementing design patterns and Java essentials for flight booking and management. The Webapp (Cloud project) demonstrated expertise in cloud technologies, utilizing Node.js for user management and deploying on cloud platforms with Terraform. The Portfolio Website highlighted frontend and backend development skills, utilizing React for dynamic content and Node.js for API integration. Lastly, CryptoTax showcased algorithmic and backend skills, implementing a cryptocurrency tax calculator with API integration and data storage. These projects collectively demonstrate proficiency in a wide array of technologies and methodologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>{
                        projects.slice(0, 6).map((project, index) => {
                         return (
                          <ProjectCard
                          key={index}
                          {...project}
                                 />
                                  )
                              })
    }
  </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
    {
      projects.slice(6, 12).map((project, index) => {
        return (
          <ProjectCard
            key={index}
            {...project}
          />
        )
      })
    }
  </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
    {
      projects.slice(12).map((project, index) => {
        return (
          <ProjectCard
            key={index}
            {...project}
          />
        )
      })
    }
  </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
