import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import PlanningBOQ from './pages/PlanningBOQ';
import ProcurementVendor from './pages/ProcurementVendor';
import FinancialControl from './pages/FinancialControl';
import AICopilot from './pages/AICopilot';
import PortfolioView from './pages/PortfolioView';
import ProjectDetail from './pages/ProjectDetail';
import ExecutionTimeline from './pages/ExecutionTimeline';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout title="Executive Portfolio Overview"><Dashboard /></Layout>} />
        <Route path="/projects" element={<Layout title="Portfolio View"><PortfolioView /></Layout>} />
        <Route path="/procurement" element={<Layout title="Procurement Intelligence"><ProcurementVendor /></Layout>} />
        <Route path="/finance" element={<Layout title="Financial Control"><FinancialControl /></Layout>} />
        <Route path="/reports" element={<Layout title="Planning & BOQ"><PlanningBOQ /></Layout>} />
        <Route path="/risk" element={<Layout title="Execution & Timeline"><ExecutionTimeline /></Layout>} />
        <Route path="/detail" element={<Layout title="Project Detail"><ProjectDetail /></Layout>} />
        <Route path="/copilot" element={<Layout title="HSI Copilot"><AICopilot /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
