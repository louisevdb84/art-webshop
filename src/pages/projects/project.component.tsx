import React, { Component } from 'react';
import projects from '../../data/projects';
import './project.styles.scss';
import {Card} from 'react-bootstrap';

class Project extends Component {
  render() {
    return (        
      <div id="project">
        <Card>
                <br></br>
              <h1>My Projects</h1>              
              <br></br>
              <div className="gallery"> 
                  {projects.map((item, key) => (
                      <div className="container">
                          <p className="middle">
                              <div className="text">{item.description}</div>
                        </p>
                        <img alt="project" className="projectimage" src={item.image}></img>                    
                          <div className="title">
                              <p className="text">{item.name}</p>
                        </div>
                    </div>
                
            ))}     
            
      </div>
        </Card>
    </div>
        
    );
  }
}

export default Project;