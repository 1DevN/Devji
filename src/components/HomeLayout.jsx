import React, { useState, useEffect } from 'react';

function HomeLayout() {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  useEffect(() => {
    // Show first text after 1 second
    setTimeout(() => setShowFirstText(true), 500);
    // Show second text after 3 seconds
    setTimeout(() => setShowSecondText(true), 1000);
    // Show third text after 5 seconds
    setTimeout(() => setShowThirdText(true), 1500);
  }, []);

  return (
    <div className="home-container">
      <img src="/backs.png" alt="Dev Nandan" className="img" />
      <div className="intro-section">
        <h1 className="intro-heading">Hi,</h1>
        <h1 className={`intro-heading ${showFirstText ? 'visible' : 'hidden'}`}>
          I am Dev Nandan...
        </h1>
        <p className={`intro-description ${showSecondText ? 'visible' : 'hidden'}`}>
          Aspiring full-stack developer
        </p>
        <p className={`intro-description ${showThirdText ? 'visible' : 'hidden'}`}>
         + Bodybuilder
        </p>
      </div>
    </div>
  );
}

export default HomeLayout;
