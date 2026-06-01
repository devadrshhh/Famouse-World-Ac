import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InquiryForm from './components/InquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileCall from './components/StickyMobileCall';
import IceAirflowBackground from './components/IceAirflowBackground';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-800 flex flex-col font-sans select-none antialiased relative">
      {/* Dynamic Parallax Ice Airflow Background */}
      <IceAirflowBackground />
      {/* Sticky Premium Navbar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <InquiryForm />
        <Contact />
      </main>

      {/* Structured footer details */}
      <Footer />

      {/* Floating Action elements */}
      <FloatingWhatsApp />
      <StickyMobileCall />
    </div>
  );
}

export default App;
