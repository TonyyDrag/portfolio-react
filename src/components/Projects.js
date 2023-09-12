import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projWIP from "../assets/images/work-in-progress.png";
import colorSharp from "../assets/images/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather App",
      description: "Gives a weather pronostic using React and consuming an API",
      imgUrl: projImg1,
      linkUrl: "#"
    },
    {
      title: "CRUD",
      description: "A funcional Create Read Update Delete aplication",
      imgUrl: projImg2,
      linkUrl: "#"
    },
    {
      title: "E-Shop",
      description: "E-Shop Demo",
      imgUrl: projImg3,
      linkUrl: "#"
    },
    {
      title: "WIP",
      description: "WIP",
      imgUrl: projWIP,
      linkUrl: "#"
    },
    {
      title: "WIP",
      description: "WIP",
      imgUrl: projWIP,
      linkUrl: "#"
    },
    {
      title: "WIP",
      description: "WIP",
      imgUrl: projWIP,
      linkUrl: "#"
    },
  ];

  const projectsTab2 = [
    {
        title: "WIP",
        description: "WIP",
        imgUrl: projWIP,
        linkUrl: "#"
      },
      {
        title: "WIP",
        description: "WIP",
        imgUrl: projWIP,
        linkUrl: "#"
      },
      {
        title: "WIP",
        description: "WIP",
        imgUrl: projWIP,
        linkUrl: "#"
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                      <Row>
                        {
                          projects.map((project, index) => {
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
                          projectsTab2.map((project, index) => {
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="Image"></img>
    </section>
  )
}