import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import UnitCountOne from "../components/UnitCountOne";

const HomePageOne = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* UnitCountOne */}
        <UnitCountOne />

      </MasterLayout>
    </>
  );
};

export default HomePageOne;
