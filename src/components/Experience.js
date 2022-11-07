import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dopeStickerPng from "../assets/img/dopesticker.png";
import herioPng from "../assets/img/heroi.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  const projects = [
    {
      title: "Back-end Developer at HEROI",
      description:
        "Developed and maintained an authentication API for the web site using Golang.",
      descriptionSecond:
        "Developed the Rest Services, and wrote the Unit testing for the application.",
      imgUrl: herioPng,
      githubLink: "",
      siteLink: "",
      period: "7 months (2022/02 - 2022/08)",
    },
    {
      title: "Full stack at DopeStickers",
      description:
        "Designing the front-end architecture and ensuring a responsive design.",
      descriptionSecond: "Developing the APIs for the back-end using NodeJS.",
      imgUrl: dopeStickerPng,
      githubLink: "https://github.com/Yosri-ctrl/DopeStickersAPI",
      siteLink: "https://storied-pasca-cf9434.netlify.app",
      period: "1 months (2022/01 - 2022/02)",
    },
  ];

  return (
    <section className="project" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Working Experience</h2>
                <br />
                <br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
