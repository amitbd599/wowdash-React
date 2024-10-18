import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ImageUploadLayer from "../components/ImageUploadLayer";




const ImageUploadPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Radio" />

        {/* ImageUploadLayer */}
        <ImageUploadLayer />

      </MasterLayout>

    </>
  );
};

export default ImageUploadPage;
