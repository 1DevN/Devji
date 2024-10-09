import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsData = [
  { name: 'Data Structures and Algorithms', percentage: 40, img: 'dsa.png' },
  { name: 'Java', percentage: 9, img: 'java.png' },
  { name: 'C++', percentage: 7, img: 'c++.png' },
  { name: 'JavaScript', percentage: 45, img: 'javascript.png' },
  { name: 'React JS', percentage: 93, img: 'reat.png' },
  { name: 'Tailwind CSS', percentage: 42, img: 'tailwind.png' },
  { name: 'Node JS', percentage: 15, img: 'node.png' },
  { name: 'MongoDB', percentage: 8, img: 'mongodb.png' },
  { name: 'REST APIs', percentage: 2, img: 'restapi.png' },
];

function Service() {
  const [inView, setInView] = useState(false);
  const skillSectionRef = useRef(null);
  const [progressValues, setProgressValues] = useState(
    skillsData.map(() => 0) // Initially set all progress values to 0
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Animate progress values once the section comes into view
      skillsData.forEach((skill, index) => {
        setTimeout(() => {
          setProgressValues((prevValues) =>
            prevValues.map((value, i) => (i === index ? skill.percentage : value))
          );
        }, index * 300); // Stagger animations slightly for each skill
      });
    }
  }, [inView]);

  return (
    <div className="home-container" ref={skillSectionRef}>
      <div className="skills-section">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div className="circular-progress-container" key={index}>
              <CircularProgressbar
                value={progressValues[index]}
                styles={buildStyles({
                  pathColor: '#09de08',
                  trailColor: '#1f2937',
                })}
              />
              <div className="inner-circle">
                <img src={skill.img} alt={skill.name} className="skill-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
