import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ColumnChartLayer from "../components/ColumnChartLayer";


const ColumnChartPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Colors" />

        {/* ColumnChartLayer */}
        <ColumnChartLayer />


      </MasterLayout>
    </>
  );
};

export default ColumnChartPage;
