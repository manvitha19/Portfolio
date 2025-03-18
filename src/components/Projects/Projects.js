import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inventory from "../../Assets/Projects/inventory.jpg";
import event from "../../Assets/Projects/event.jpg";
import voice from "../../Assets/Projects/voice.jpg";
import mobile from "../../Assets/Projects/mobile.jpg";
import fake from "../../Assets/Projects/fake.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title="HMM based Voice Assistant for Windows"
              description="Speech is a basic form of communication between human beings. Every human wants to work in an efficient and convenient environment. This voice assistant aids in accomplishing this task. This voice assistant performs all basic tasks and it also has the ability to send whatsapp message to the specified number, play songs from Spotify web application."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fake}
              isBlog={false}
              title="Counterfeit Currency Detection System"
              description="Counterfeiting of currency has become a real threat to the livelihood of people as well as the economy of our country. This project, will investigate the various security features of Indian currency and then, detect and invalidate fake Indian currency by using advanced image processing and computer vision techniques."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Block-chain based Event Management Web-app"
              description="A web application designed for managing different events. The project was built using blockchain. User can create an event with title, description, image, date and price. The price can be set in Ethereum. It resolves the tedious process of collecting the money and utilizing it. The utilization of money is transparent and secure.  "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Management"
              description="Inventory management is the process of efficiently overseeing and controlling the acquisition, storage, and utilization of materials, goods, and products within an organization. A web-application designed for our college purpose so that inventory of our college was easily maintained. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="Mobile Application"
              description="A mobile application for a divine/religious foundation called WAHTS Foundation, Bangalore. The app includes multiple features like lectures, audio, donations and many more. The mobile application was built using flutter. This project provides people a way to help their community and also gain knowledge.  "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
