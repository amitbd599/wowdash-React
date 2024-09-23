import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import UnitCountOne from "../components/UnitCountOne";
import DashBoardLayerOne from "../components/DashBoardLayerOne";

const HomePageOne = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="AI" />

        {/* UnitCountOne */}
        <UnitCountOne />

        {/* DashBoardLayerOne */}
        <DashBoardLayerOne />

      </MasterLayout>
    </>
  );
};

export default HomePageOne;
