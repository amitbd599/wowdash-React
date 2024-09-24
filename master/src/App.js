import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import HomePageFour from "./pages/HomePageFour";
import HomePageFive from "./pages/HomePageFive";
// import PhosphorIconInit from "./helper/PhosphorIconInit";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      {/* <PhosphorIconInit /> */}

      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/index-2" element={<HomePageTwo />} />
        <Route exact path="/index-3" element={<HomePageThree />} />
        <Route exact path="/index-4" element={<HomePageFour />} />
        <Route exact path="/index-5" element={<HomePageFive />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;



