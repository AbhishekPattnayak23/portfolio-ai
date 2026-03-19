import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Logger from '../utils/Logger';

/**
 * About page component displaying professional information
 * Includes animations with framer-motion and error handling
 */
const About = () => {
  Logger.info('Rendering About page');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <ErrorBoundary>
      <Helmet>
        <title>About Me | Professional Background & Expertise</title>
        <meta name="description" content="Learn about my professional background, expertise, and journey as a developer." />
      </Helmet>

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Container className="py-5">
          <Row className="mb-5">
            <Col>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
              >
                <h1 className="display-4 mb-4">About Me</h1>
                <div className="bio-section mb-5">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h2 className="h3 mb-3">Professional Journey</h2>
                      <p>
                        With over a decade of experience in software development, I've dedicated my career to
                        building elegant, user-centric applications that solve real-world problems. My journey
                        began with a fascination for how technology can transform ideas into powerful tools,
                        and that passion continues to drive my work today.
                      </p>
                      <p>
                        Throughout my career, I've embraced the philosophy that the best code is not just
                        functional, but maintainable, scalable, and accessible. This approach has guided me
                        through numerous projects across various industries.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </motion.div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ delay: 0.3 }}
              >
                <h2 className="h2 mb-4">Areas of Expertise</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {expertise.map((item, index) => (
                    <Col key={index}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4">
                          <div className="mb-3">
                            <span className="fs-1 text-primary">{item.icon}</span>
                          </div>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Col>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ delay: 0.4 }}
              >
                <h2 className="h2 mb-4">Professional Background</h2>
                <div className="timeline">
                  {background.map((item, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <Card className="border-0 shadow-sm mb-4">
                          <Card.Body className="p-4">
                            <h3 className="h5">{item.role}</h3>
                            <p className="text-muted mb-2">{item.company} | {item.period}</p>
                            <p>{item.description}</p>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </ErrorBoundary>
  );
};

// Sample data for expertise section
const expertise = [
  {
    icon: '',
    title: 'Frontend Development',
    description: 'Specialized in React.js, Next.js, and modern JavaScript frameworks with a focus on performance optimization and responsive design.'
  },
  {
    icon: '',
    title: 'Backend Development',
    description: 'Experienced in building scalable APIs and server architectures using Node.js, Express, Python, and various database technologies.'
  },
  {
    icon: '',
    title: 'Mobile Development',
    description: 'Skilled in developing cross-platform mobile applications using React Native and native integration capabilities.'
  },
  {
    icon: '',
    title: 'UI/UX Design',
    description: 'Proficient in creating intuitive user interfaces and enhancing user experiences through thoughtful design principles.'
  },
  {
    icon: '',
    title: 'DevOps',
    description: 'Knowledgeable in CI/CD pipelines, Docker containerization, and cloud deployment strategies for seamless application delivery.'
  },
  {
    icon: '',
    title: 'Data Analysis',
    description: 'Capable of extracting meaningful insights from data using various analytical tools and visualization techniques.'
  }
];

// Sample data for professional background
const background = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2020 - Present',
    description: 'Leading development of enterprise-level applications and mentoring junior developers. Introduced modern development practices that increased team productivity by 35%.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions Group',
    period: '2016 - 2020',
    description: 'Developed and maintained multiple client projects using React, Node.js and MongoDB. Implemented CI/CD pipelines that reduced deployment time by 40%.'
  },
  {
    role: 'Web Developer',
    company: 'CreativeTech Agency',
    period: '2013 - 2016',
    description: 'Created responsive websites and web applications for various clients across different industries, focusing on performance and user experience.'
  }
];

export default About;
