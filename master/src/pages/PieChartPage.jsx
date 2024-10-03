import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import PieChartLayer from "../components/PieChartLayer";

const PieChartPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Settings - Languages" />

        {/* PieChartLayer */}
        <PieChartLayer />

      </MasterLayout>

    </>
  );
};

export default PieChartPage; 
