import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-bathroom.jpg"
import GalleryNav from "../components/GalleryNav";

const BathroomFinishing = () => {
  return (
    <div className="page-container">
      <div className="container-fluid d-flex flex-column justify-content-end page-hero"
      style={{ backgroundImage: `url(${bg})` }}>
        <div className="page-text-container">
          <h1 className="page-title">Bathroom Finishing</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          Make the bathroom your favorite room in the house. APL Restoration Ltd
          will help you create your dream bathroom from start to finish.
        </p>
        <p>Our Services:</p>
        <ul className="page-li">
          <li>drywall repair</li>
          <li>replacing outdated tile or updating paint colors</li>
          <li>new window treatments</li>
          <li>replacing shower curtains with fashionable shower doors</li>
          <li>installing molding</li>
          <li>
            replacing fixtures such as faucets, towel bars, mirrors and medicine
            cabinets or hardware on vanity drawers
          </li>
          <li>
            sanding wood features like a vanity and staining it a new shade
          </li>
          <li>replacing the sink</li>
          <li>re-grouting your tile</li>
          <li>adding a fresh bead of caulk around your bathtub</li>
        </ul>
        <p>
          Be sure, our trusted handymen can help your bathroom renovation go
          smoothly.
        </p>
      </div>
      <GalleryNav />
    </div>
  );
};

export default BathroomFinishing;
