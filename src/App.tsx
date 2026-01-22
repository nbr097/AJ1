import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { QuotePage } from './pages/Quote';
import { TermsPage } from './pages/Terms';
import { TermsSignablePage } from './pages/TermsSignable';
import { TipsPage } from './pages/Tips';
import { StoragePage } from './pages/Storage';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms-signable" element={<TermsSignablePage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/storage" element={<StoragePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
