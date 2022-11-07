import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

import maydayPng from "../assets/img/mayday.png";
import headPhone from "../assets/img/headphones.jpg"
import airhbnb from "../assets/img/airhbnb.png"
import youlearn from "../assets/img/youlearn.png"
import reactPng from "../assets/img/reactpng.png"
import pixelated from "../assets/img/pixelated.png"

export const Projects = () => {
  const projects = [
    {
      title: "Pixilated (Unfinished)",
      description: "Developed using Reactjs and Nodejs",
      descriptionSecond:
        "Accomplished the connection between React app and the API",
      imgUrl: pixelated,
      githubLink: "https://github.com/Yosri-ctrl/Pixelated",
      siteLink: "",
      period: "(2021/11)",
    },
    {
      title: "Mayday",
      description:
        "Used NodeJS to implement a custom Restful API for the database",
      descriptionSecond:
        "Accomplished the connection between React app and the API",
      imgUrl: maydayPng,
      githubLink: "https://github.com/Yosri-ctrl/mayday_V2",
      siteLink: "",
      period: "1 months (2021/09 - 2021/10)",
    },
    {
      title: "React mini projects",
      description: "Learning about all the react features and tools",
      descriptionSecond: "",
      imgUrl: reactPng,
      githubLink: "https://github.com/Yosri-ctrl/holbertonschool-web_react",
      siteLink: "",
      period: "3 months (2021/06 - 2021/09)",
    },
    {
      title: "Back end mini projects",
      description:
        "Learning about async functions, caching, pagination, authentication, Redis, Mysql, Es6 and unittesting",
      descriptionSecond: "",
      imgUrl: "",
      githubLink: "https://github.com/Yosri-ctrl/holbertonschool-web_back_end",
      siteLink: "",
      period: "3 months (2021/03 - 2021/06)",
    },
    {
      title: "front end mini projects",
      description:
        "Learning about HTML, CSS, SASS, responsive design, bootstrap, jquary and cookies",
      descriptionSecond: "",
      imgUrl: "",
      githubLink: "https://github.com/Yosri-ctrl/holbertonschool-web_front_end",
      siteLink: "",
      period: "3 months (2021/01 - 2021/03)",
    },
    {
      title: "YouLearn",
      description:
        "Udemy clone, provide video treaming services",
      descriptionSecond: "",
      imgUrl: youlearn,
      githubLink: "https://github.com/Yosri-ctrl/YouLearn",
      siteLink: "",
      period: "1 months (2020/11 - 2020/12)",
    },
    {
      title: "Airbnb Clone",
      description:
        "AirBnb clone to learn all the advanced tools and technologie for web development",
      descriptionSecond: "",
      imgUrl: airhbnb,
      githubLink: "https://github.com/Yosri-ctrl/AirBnB_clone_v4",
      siteLink: "",
      period: "1 months (2020/10 - 2020/11)",
    },
    {
      title: "Holberton Headphones",
      description:
        "Ecommerce site for Headphones",
      descriptionSecond: "",
      imgUrl: headPhone,
      githubLink: "https://github.com/Yosri-ctrl/holberton-headphones",
      siteLink: "",
      period: "1 months (2020/09 - 2020/10)",
    },
    {
      title: "High level programming mini projects",
      description: "Learning Python tools, classes and web scrapping",
      descriptionSecond: "",
      imgUrl: "",
      githubLink:
        "https://github.com/Yosri-ctrl/holbertonschool-higher_level_programming",
      siteLink: "",
      period: "3 months (2020/06 - 2020/09)",
    },
    {
      title: "low level programming mini projects",
      description:
        "Learn variables, functions, nested loops, pointers, recursion, argc/argv, malloc, function pointers.",
      descriptionSecond: "",
      imgUrl: "",
      githubLink:
        "https://github.com/Yosri-ctrl/holbertonschool-low_level_programming",
      siteLink: "",
      period: "3 months (2020/03 - 2020/06)",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Personal Projects</h2>
                  <br />
                  <br />
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
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
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
