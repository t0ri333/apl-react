import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-tile-installation.jpg";
import GalleryNav from "../components/GalleryNav";
const Tiling = () => {
  return (
    <div className="page-container">
      <div
        className="container-fluid d-flex flex-column justify-content-end page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="page-text-container">
          <h1 className="page-title"> Tiling</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          We are proud of ourselves on the quality of our service and the work
          that we have completed. APL Restoration have a qualified tiler with
          more than 15 years’ experience in tiling service. Our goal is to
          provide great service to our customers. Contact us today for more
          information.
        </p>
      </div>
      <GalleryNav />
    </div>
  );
};

export default Tiling;
