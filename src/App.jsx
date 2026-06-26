import './styles/globals.css';
import { useSpotlight } from './hooks/useSpotlight';
import ScrollProgress from './components/layout/ScrollProgress';
import LeftPanel from './components/layout/LeftPanel';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Research from './components/sections/Research';
import Contact from './components/sections/Contact';
import FaqBot from './components/bot/FaqBot';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

function Spotlight() {
  const ref = useSpotlight();
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 1, pointerEvents: 'none',
      }}
    />
  );
}

export default function App() {
  return (
    <>
      <Spotlight />
      <ScrollProgress />

      <div
        className="page-wrap"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 3rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
            gap: '3rem',
            minHeight: '100vh',
          }}
        >
          <LeftPanel />

          <main
            className="right-panel"
            style={{ padding: '5.5rem 0 6rem' }}
          >
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Research />
            <Contact />
          </main>
        </div>
      </div>

      <FaqBot />
      <WhatsAppFloat />
    </>
  );
}
