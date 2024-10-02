import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ListLayer from "../components/ListLayer";




const ListPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Settings - Languages" />

        {/* ListLayer */}
        <ListLayer />

      </MasterLayout>

    </>
  );
};

export default ListPage; 
