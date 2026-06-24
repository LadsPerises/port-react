import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Terminals from './components/sections/Terminals';
import Tracker from './components/sections/Tracker';
import Legislation from './components/sections/Legislation';
import Contacts from './components/sections/Contacts';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Terminals />
            <Tracker />
            <Legislation />
            <Contacts />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
