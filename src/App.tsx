import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import StudentSection from './components/StudentSection'
import LibrarySection from './components/LibrarySection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import AppPreview from './components/AppPreview'
import WhyNavastha from './components/WhyNavastha'
import ComingSoon from './components/ComingSoon'
import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-brand px-4 py-2 text-on-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <StudentSection />
        <LibrarySection />
        <HowItWorks />
        <Features />
        <AppPreview />
        <WhyNavastha />
        <ComingSoon />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
