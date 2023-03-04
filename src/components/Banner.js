import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import planets1 from "../assets/img/planets1.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Pdf from "../assets/Yosri_Bouabid.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Software Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <h1>
                  {`Hi! I'm Yosri a `}
                  <span
                    className="txt-rotate"
                    dataPeriod="10000"
                    data-rotate='[ "Web Developer", "Web Designer", "Software Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>
                  Full Stuck Web Developer, Recent graduated. Currently working
                  in an internship as back-end developer, to establish my skills
                  and abilities even more. Highly organized multitasking with
                  expertise in scheduling projects.
                </p>
                <a
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgb(223, 221, 221)" }}
                >
                  <span className="tagline">Download CV</span>
                </a>
                <a href="#connect" style={{ textDecoration: "none" }}>
                  <button className="vvd">
                    <span>
                      Let's Connect <ArrowRightCircle size={25} />
                    </span>
                  </button>
                </a>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div>
                <img src={planets1} alt="Header Img" className="headerImg"/>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
