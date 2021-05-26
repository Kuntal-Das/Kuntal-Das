import React, { Fragment } from "react";
import "../styles/projectpage.scss";

import Introduction from "../components/Introduction";

const ProjectPage = (props) => {
  return (
    <Fragment>
      <Introduction
        titleLight="The title"
        titleBold="of my project"
        subtitle="a short subtitle"
        imgSrc="https://source.unsplash.com/300x300?design"
      />
      <div class="portfolio-item-individual">
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
        <img src="https://source.unsplash.com/640x240?design" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
          amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
          incidunt?
        </p>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
      </div>
    </Fragment>
  );
};

export default ProjectPage;
