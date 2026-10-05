import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout & Common Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageLoader from './components/layout/PageLoader';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';
import FloatingActions from './components/common/FloatingActions';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Process from './pages/Process';
import Team from './pages/Team';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <div className="site-app">
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
      <FloatingActions />
      <BackToTop />
    </div>
  );
}