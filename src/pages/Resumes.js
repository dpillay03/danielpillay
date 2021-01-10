import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Service from "../components/Service";


function Resumes() {
  const [skills, setSkills] = useState([]);
  const [services, setServices] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get('/api/skills')
      .then(response => {
        setSkills(response.data);
      })
    axios.get('/api/experience')
      .then(response => {
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })

  }, [])

  return (
    <Layout>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
