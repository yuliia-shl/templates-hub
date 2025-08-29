import './App.css';
import { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Provides from './components/Provides/Provides';
import Reasons from './components/Reasons/Reasons';
import ForClient from './components/ForClient/ForClient';
import LockerType from './components/LockerType/LockerType';
import FAQ from './components/FAQ/FAQ';
import MoreInfo from './components/MoreInfo/MoreInfo';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer';
import ToastProvider from './components/Toast/ToastProvider';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPolicy, setShowPolicy] = useState(false);

  const openPolicy = () => {
    setShowPolicy(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePolicy = () => {
    setShowPolicy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        setActiveIndex={setActiveIndex}
        isPrivacy={showPolicy}
        onShowHome={closePolicy}
      />

      {showPolicy ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <Provides />
          <Reasons />
          <ForClient />
          <LockerType />
          <FAQ />
          <MoreInfo />
        </main>
      )}

      <Footer onPolicyClick={openPolicy} />
      <ToastProvider />
    </>
  );
}

export default App;
