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
import CardPage from "./pages/CardPage";
import CarouselPage from "./pages/CarouselPage";
import ChatEmptyPage from "./pages/ChatEmptyPage";
import ChatMessagePage from "./pages/ChatMessagePage";
import ChatProfilePage from "./pages/ChatProfilePage";
import CodeGeneratorNewPage from "./pages/CodeGeneratorNewPage";
import CodeGeneratorPage from "./pages/CodeGeneratorPage";
import ColorsPage from "./pages/ColorsPage";
import ColumnChartPage from "./pages/ColumnChartPage";
import CompanyPage from "./pages/CompanyPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import DropdownPage from "./pages/DropdownPage";
import ErrorPage from "./pages/ErrorPage";
import FaqPage from "./pages/FaqPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import FormLayoutPage from "./pages/FormLayoutPage";
import FormValidationPage from "./pages/FormValidationPage";
import FormPage from "./pages/FormPage";
import GalleryPage from "./pages/GalleryPage";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";
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


        {/* SL */}
        <Route exact path="/add-user" element={<AddUserPage />} />
        <Route exact path="/alert" element={<AlertPage />} />
        <Route exact path="/assign-role" element={<AssignRolePage />} />
        <Route exact path="/avatar" element={<AvatarPage />} />
        <Route exact path="/badges" element={<BadgesPage />} />
        <Route exact path="/button" element={<ButtonPage />} />
        <Route exact path="/calendar-main" element={<CalendarMainPage />} />
        <Route exact path="/calendar" element={<CalendarMainPage />} />
        <Route exact path="/card" element={<CardPage />} />
        <Route exact path="/carousel" element={<CarouselPage />} />
        <Route exact path="/chat-empty" element={<ChatEmptyPage />} />
        <Route exact path="/chat-message" element={<ChatMessagePage />} />
        <Route exact path="/chat-profile" element={<ChatProfilePage />} />
        <Route exact path="/code-generator" element={<CodeGeneratorPage />} />
        <Route exact path="/code-generator-new" element={<CodeGeneratorNewPage />} />
        <Route exact path="/colors" element={<ColorsPage />} />
        <Route exact path="/column-chart" element={<ColumnChartPage />} />
        <Route exact path="/company" element={<CompanyPage />} />
        <Route exact path="/currencies" element={<CurrenciesPage />} />
        <Route exact path="/dropdown" element={<DropdownPage />} />
        <Route exact path="/email" element={<EmailPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/form-layout" element={<FormLayoutPage />} />
        <Route exact path="/form-validation" element={<FormValidationPage />} />
        <Route exact path="/form" element={<FormPage />} />
        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route exact path="/image-generator" element={<ImageGeneratorPage />} />


        <Route exact path="*" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;



