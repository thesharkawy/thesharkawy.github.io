import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, LeftToggleButton, RightToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Having explored a variety of fields throughout my career, here are some of the projects I launched along my journey.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <LeftToggleButton active value="all" onClick={() => setToggle('all')}>ALL</LeftToggleButton>
            :
            <LeftToggleButton value="all" onClick={() => setToggle('all')}>ALL</LeftToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'competition' ?
            <RightToggleButton active value="competition" onClick={() => setToggle('competition')}>COMPETITIONS</RightToggleButton>
            :
            <RightToggleButton value="competition" onClick={() => setToggle('competition')}>COMPETITIONS</RightToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects