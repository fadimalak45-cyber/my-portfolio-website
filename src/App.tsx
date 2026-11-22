import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Journey } from './components/sections/Journey';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Services } from './components/sections/Services';
import { ExperienceEducation } from './components/sections/ExperienceEducation';
import { Contact } from './components/sections/Contact';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const sectionIds = [
    'hero',
    'about',
    'journey',
    'skills',
    'projects',
    'testimonials',
    'services',
    'experience',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-ink flex flex-col font-body antialiased selection:bg-editorial-accent selection:text-black">
      {/* Fixed Navigation Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Single Page Content */}
      <main className="flex-grow w-full">
        <Hero />
        <Stats />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Testimonials />
        <Services />
        <ExperienceEducation />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
