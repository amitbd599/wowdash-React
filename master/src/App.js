import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import HomePageFour from "./pages/HomePageFour";
import HomePageFive from "./pages/HomePageFive";
import HomePageSix from "./pages/HomePageSix";
import HomePageSeven from "./pages/HomePageSeven";
import EmailPage from "./pages/EmailPage";
import AddUserPage from "./pages/AddUserPage";
import AlertPage from "./pages/AlertPage";
import AssignRolePage from "./pages/AssignRolePage";
import AvatarPage from "./pages/AvatarPage";
import BadgesPage from "./pages/BadgesPage";
import ButtonPage from "./pages/ButtonPage";
import CalendarMainPage from "./pages/CalendarMainPage";
import DemoApp from "./components/child/Calendar";
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
        <Route exact path="/index-6" element={<HomePageSix />} />
        <Route exact path="/index-7" element={<HomePageSeven />} />
        <Route exact path="/email" element={<EmailPage />} />

        {/* SL */}
        <Route exact path="/add-user" element={<AddUserPage />} />
        <Route exact path="/alert" element={<AlertPage />} />
        <Route exact path="/assign-role" element={<AssignRolePage />} />
        <Route exact path="/avatar" element={<AvatarPage />} />
        <Route exact path="/badges" element={<BadgesPage />} />
        <Route exact path="/button" element={<ButtonPage />} />
        <Route exact path="/calendar-main" element={<CalendarMainPage />} />
        {/* <Route exact path="/calendar-main" element={<DemoApp />} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;



