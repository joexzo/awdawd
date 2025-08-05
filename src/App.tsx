import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage onBackToHome={() => window.history.back()} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contacts" element={<ContactsPage onBackToHome={() => window.history.back()} />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
