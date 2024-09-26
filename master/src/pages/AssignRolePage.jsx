import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AssignRoleLayer from "../components/AssignRoleLayer";


const AssignRolePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Role & Access" />

        {/* AssignRoleLayer */}
        <AssignRoleLayer />


      </MasterLayout>
    </>
  );
};

export default AssignRolePage;
