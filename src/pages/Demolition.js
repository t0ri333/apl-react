import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-demolition.jpg"
import GalleryNav from "../components/GalleryNav";
const Demolition = () => {
  return (
    <div className="page-container">
      <div className="container-fluid d-flex flex-column justify-content-end page-hero"
      style={{ backgroundImage: `url(${bg})` }}>
        <div className="page-text-container">
          <h1 className="page-title">Demolition</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          When any environmental hazards are involved, it’s more than just a
          routine dismantlement project. You need an experienced, highly
          knowledgeable contractor to do the job right safely, cost-effectively,
          and in full regulatory compliance.<br/> APL Restoration is the right
          choice. We look forward to covering all your demolition needs.
        </p>
      </div>
      <GalleryNav />
    </div>
  );
};

export default Demolition;
