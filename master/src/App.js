import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
// import PhosphorIconInit from "./helper/PhosphorIconInit";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      {/* <PhosphorIconInit /> */}

      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/index-2" element={<HomePageTwo />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;



