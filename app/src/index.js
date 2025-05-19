import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import WorkExperience from "./pages/WorkExperience";
import AcademicWork from "./pages/AcademicWork";
import NoPage from "./pages/NoPage";
import Job1 from "./pages/Job1";
import Job2 from "./pages/Job2";
import Job3 from "./pages/Job3";

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
          <Route path="workexperience/job1" element={<Job1 />} />
          <Route path="workexperience/job2" element={<Job2 />} />
          <Route path="workexperience/job3" element={<Job3 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);