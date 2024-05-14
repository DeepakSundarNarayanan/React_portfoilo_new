import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from '../assets/DeepakSundar.pdf';
import image from '../assets/img/image.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Back-end Developer", "Exploring DevOps" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Deepak`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Back-end Developer", "Exploring DevOps" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Deepak Sundar Narayanan is a proficient Software Engineering Systems graduate student at Northeastern University, set to graduate in May 2025. Holding a Bachelor's in Electrical and Electronics Engineering from St. Joseph’s College of Engineering, he possesses a diverse skill set. Deepak is adept in programming languages like C, Python, Java, JavaScript, TypeScript, and C#. His technical expertise extends to databases (SQL, MongoDB, PL/SQL, MySQL), cloud platforms (GCP, Azure, Docker, Kubernetes), and web development technologies (React.js, Node.js, HTML, Spring, SCSS, Angular, Redux, Bootstrap). As a Senior Systems Engineer at Infosys, Deepak contributed to innovative features, served as a Scrum Master, and efficiently resolved incidents. His project portfolio includes full-stack applications, UI enhancements, and a Java application for airline management. Certified in SAFe for DevOps, Infosys Certified Spring REST Developer, and SAFe5 Practitioner – Agile, Deepak showcases a commitment to continuous learning. His proactive approach is evident in personal projects, including a portfolio website utilizing APIs for dynamic data retrieval. In summary, Deepak is a dedicated and skilled professional with a strong academic background, diverse expertise in software engineering, and a proactive approach to learning and application in real-world scenarios. His proficiency in modern technologies positions him as a valuable addition to any software engineering team.</p>
                  <button > 
                  <a href={resume} download='DeepakSundar_Resume' style={{ color: 'white', textDecoration: 'none' }}>
                  Download CV <ArrowRightCircle size={25} />
                  </a>
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={image} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
