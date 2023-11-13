import React from 'react';
import { Routes as RoutesComponent, Route } from 'react-router-dom';
import Home from './index_home';
// import About from './components/Pages/About';
// import Contact from './components/Pages/Contact';
// import ServicePage from './components/Pages/Services';
// import CaseStudyPage from './components/Pages/Case_Study';
// import BlogPage from './components/Pages/Blogs';
// import LoginPage from './components/Pages/Login';
// import ProjectPage from './components/Pages/Project_Page';
// import TechStacksPage from './components/Pages/Tech_Stack';

function Routes() {
  return (
    <RoutesComponent>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Services" element={<ServicePage />} />
      <Route path="/case_study" element={<CaseStudyPage />} />
      
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/projects/:projectTitle" element={<ProjectPage />} /> 
      <Route path="/techstacks/:name" element={<TechStacksPage />} />  */}


    </RoutesComponent>
  );
}

export default Routes;
