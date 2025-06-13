import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AcademicWork from "./pages/AcademicWork";
import WorkExperience from "./pages/WorkExperience";
import LegislativeAid from "./pages/LegislativeAid";
import MarketingInternship from "./pages/MarketingInternship";
import CraftServices from "./pages/CraftServices";
import Footer from "./components/Footer";
import WowCampaign from "./pages/Academic/WowCampaign";
import SportsMedia from "./pages/Academic/SportsMedia";
import ArticlePage from "./pages/Academic/ArticlePage";
import EntrepreneurialCapstone from "./pages/Academic/EntrepreneurialCapstone";
import GlossierCampaign from "./pages/Academic/GlossierCampaign";
import NoPage from "./pages/NoPage";

import ReactDOM from 'react-dom/client';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academicwork" element={<AcademicWork />} />
          <Route path="workexperience" element={<WorkExperience />} />
          <Route path="workexperience/legislativeaid" element={<LegislativeAid />} />
          <Route path="workexperience/marketinginternship" element={<MarketingInternship />} />
          <Route path="workexperience/craftservices" element={<CraftServices />} />
          <Route path="wowcampaign" element={<WowCampaign />} /> 
          <Route path="sportsmedia" element={<SportsMedia />} />
          <Route path="sportsmedia/:id" element={<ArticlePage />} />
          <Route path="entrepreneurialcapstone" element={<EntrepreneurialCapstone />} />
          <Route path="glossiercampaign" element={<GlossierCampaign />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);