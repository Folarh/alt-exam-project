import React from "react";
import "./Overview.css";
import User from "../components/User"

function Overview() {
  return (
   
    <div className="view-bio">
         <User/>
      <div className="view-bio-info">
        <p>Folarh/README.md</p>
        <h1>Hello there; welcome</h1>
      </div>
      <hr className="line-one" />

      <div className="view-button">
        <button className="button-one">ENGINEERING</button>
        <button className="button-two">TAIWOjO</button>
        <button className="button-three">@ TAIWO OJO</button>
      </div>

      <small>
      I'm a Software Engineer, frontend developer. I'm passionate about sharing knowledge, documentation, web engineering and others.
      </small>

      <div className="summary-info">
        <h5>Here's a quick summary about me:</h5>

        <ul>
          <li>😊 Pronouns: He/him</li>
          <li>
            💡 Fun fact: I'm currently studying at AltSchool Africa School of
            Software Engineering Class of 2022.
          </li>
          <li>
            🌱 I'm currently learning JavaScript, Reactjs, Git and Github.
          </li>
          <li>
            😊 I'm looking for help with open source projects, hackathons,
            internships, and entry-level opportunities.
          </li>
          <li>
            💼 Job interests: Software Engineer, Front Engineer(Intern or Junior
            level).
          </li>
          <li>📫 contact me by emailing folarintaiye@gmail.com.</li>
        </ul>
      </div>

      <hr className="line-two" />
    </div>
  );
}

export default Overview;