import { Col } from "react-bootstrap";
import githubPng from "../assets/img/nav-icon2.svg";
import sitePng from "../assets/img/icons8-website-100(1).png";
import defaulPng from "../assets/img/github.jpg";

export const ProjectCard = ({
  title,
  description,
  descriptionSecond,
  imgUrl,
  githubLink,
  siteLink,
  period,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          className="proj-img"
          src={imgUrl === "" ? defaulPng : imgUrl}
          alt="_"
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span
            style={{ display: descriptionSecond === null ? "none" : "block" }}
          >
            {descriptionSecond}
          </span>

          <span style={{ marginLeft: "20%" }}>{period}</span>
          <div>
            <a
              className="proj-a"
              href={githubLink}
              style={{ display: githubLink === "" ? "none" : "block" }}
            >
              <img src={githubPng} alt="github" />
            </a>

            <a
              className="proj-a"
              href={siteLink}
              style={{ display: siteLink === "" ? "none" : "block" }}
            >
              <img src={sitePng} alt="site" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
