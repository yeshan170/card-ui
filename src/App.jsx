import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import FeatureSection from './FeatureCard'
import ProductSection from './ProductCard';
import SliderSection from './SliderSection';
import CardCreationPage from './CardCreationPage';
import SharingOptions from './SharingOptions';
import ProfilePage from './ProfilePage';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <FeatureSection />
            <SliderSection />
            <ProductSection />
            <Footer/>
          </>
        } />
        <Route path="/create-card" element={<CardCreationPage />} />
        <Route path="/sharing-options" element={<SharingOptions />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;