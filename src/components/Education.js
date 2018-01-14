import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>LEARN Academy</h3>
          <p className="info">
            Full Stack Web Developer Program
            <span>&bull;</span>
            <em className="date">Dec 2017</em>
          </p>

          <p>
            Completed LEARN Academy's 4 month Ruby on Rails & Javascript
            bootcamp, located in downtown San diego.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>University of California - San Diego</h3>
          <p className="info">
            B.S. Biochemistry - Cell Biology
            <span>&bull;</span>
            <em className="date">March 2016</em>
          </p>

          <p>Something awesome here</p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
