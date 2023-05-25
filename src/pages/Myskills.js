import React from "react";

function Myskills(props) {
    
    const Mytechs={
        design:'Photoshop, Illustrator, Coreldraw, Figma, Adobe XD',
        develop:'Html, CSS, SCSS, Js, Jquery, React, Angular, Typescript',
        exp:'5 years'
    }

  return (
    <div>      
      <p><strong>Design Skills:</strong> {Mytechs.design}</p>
      <p><strong>Develop Skills</strong>: {Mytechs.develop}</p>
      <p><strong>Experience</strong>: {Mytechs.exp}</p>
    </div>
  );
}

export default Myskills;
