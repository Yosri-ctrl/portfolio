import reactPng from "../assets/img/icons8-react-480.png";
import nodePng from "../assets/img/icons8-nodejs-480.png";
import golangPng from "../assets/img/icons8-golang-480.png";
import javaPng from "../assets/img/icons8-java-480.png";
import pythonPng from "../assets/img/icons8-python-480.png";
import flaskPng from "../assets/img/icons8-flask-480.png";
import git from "../assets/img/icons8-git-480.png";
import mongodgPng from "../assets/img/icons8-mongodb-480.png";
import postgresqlPng from "../assets/img/icons8-postgresql-480.png";
import dockerPng from "../assets/img/icons8-docker-480.png";
import jsPng from "../assets/img/icons8-javascript-480.png";
import nestPng from "../assets/img/icons8-nestjs-480.png";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ListGroup } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="background-image-left">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.<br></br> Lorem Ipsum has been the
                  industry's standard dummy text.
                </p> */}

                <ListGroup horizontal key="sm" className="my-2 listgroup">
                  <ListGroup.Item className="listItem">
                    <img src={reactPng} alt="Image1" />
                    <h5>ReactJs</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={nodePng} alt="Image2" />
                    <h5>NodeJs</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={golangPng} alt="Image3" />
                    <h5>Golang</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={jsPng} alt="Image4" />
                    <h5>JavaScript</h5>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal key="sm" className="my-2 listgroup">
                  <ListGroup.Item className="listItem">
                    <img src={pythonPng} alt="Image4" />
                    <h5>Python</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={flaskPng} alt="Image4" />
                    <h5>Flask</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={javaPng} alt="Image4" />
                    <h5>Java</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={nestPng} alt="Image4" />
                    <h5>NestJS</h5>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal key="sm" className="my-2 listgroup">
                  <ListGroup.Item className="listItem">
                    <img src={postgresqlPng} alt="Image4" />
                    <h5>PostgreSQL</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={mongodgPng} alt="Image4" />
                    <h5>MongoDB</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={git} alt="Image4" />
                    <h5>Git / GitHub</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="listItem">
                    <img src={dockerPng} alt="Image4" />
                    <h5>Docker</h5>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
