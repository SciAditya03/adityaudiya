import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Preloader from './components/layout/Preloader';
import Cursor from './components/layout/Cursor';
import ScrollProgress from './components/layout/ScrollProgress';
import Navigation, { NAV_SECTION_IDS } from './components/layout/Navigation';
import { FooterSidebar } from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import { useActiveSection } from './hooks/useActiveSection';

// Hero is above the fold, so it ships in the main bundle.
import Hero from './components/sections/Hero';

// Everything below the fold is code-split; each chunk loads as the visitor
// scrolls toward it rather than blocking first paint.
const Education = lazy(() => import('./components/sections/Education'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Stats = lazy(() => import('./components/sections/Stats'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Startup = lazy(() => import('./components/sections/Startup'));
const Hackathons = lazy(() => import('./components/sections/Hackathons'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Research = lazy(() => import('./components/sections/Research'));
const Impact = lazy(() => import('./components/sections/Impact'));
const Contact = lazy(() => import('./components/sections/Contact'));

/**
 * Reserves vertical space while a lazy chunk loads so the page doesn't
 * jump as sections stream in.
 */
function SectionFallback() {
  return <div style={{ minHeight: '60vh' }} aria-hidden="true" />;
}

/**
 * Wraps each lazy section in its own Suspense + ErrorBoundary pair, so a
 * slow or failing chunk is isolated to that one section.
 */
function LazySection({ name, children }) {
  return (
    <ErrorBoundary name={name}>
      <Suspense fallback={<SectionFallback />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

LazySection.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

function App() {
  const activeId = useActiveSection(NAV_SECTION_IDS);

  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <FooterSidebar />
      <Navigation activeId={activeId} />

      <main>
        <Hero />

        <LazySection name="education"><Education /></LazySection>
        <LazySection name="skills"><Skills /></LazySection>
        <LazySection name="projects"><Projects /></LazySection>
        <LazySection name="stats"><Stats /></LazySection>
        <LazySection name="experience"><Experience /></LazySection>
        <LazySection name="startup"><Startup /></LazySection>
        <LazySection name="hackathons"><Hackathons /></LazySection>
        <LazySection name="certifications"><Certifications /></LazySection>
        <LazySection name="research"><Research /></LazySection>
        <LazySection name="impact"><Impact /></LazySection>
        <LazySection name="contact"><Contact /></LazySection>
      </main>
    </>
  );
}

export default App;
