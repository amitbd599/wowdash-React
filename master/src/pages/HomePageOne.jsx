import React from "react";
import Preloader from "../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import MasterLayout from "../masterLayout/MasterLayout";


const HomePageOne = () => {

  return (
    <>


      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      <MasterLayout>

      </MasterLayout>




    </>
  );
};

export default HomePageOne;
