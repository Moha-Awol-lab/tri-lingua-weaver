import './themes.css';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DhikrCounter } from './components/DhikrCounter';
import { QuranSection } from './components/QuranSection';
import { PrayerTimes } from './components/PrayerTimes';
import { Toaster } from 'sonner';

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4">
            <DhikrCounter />
          </div>
          <div className="lg:col-span-8">
            <PrayerTimes />
          </div>
        </div>

        <section className="mb-12">
          <QuranSection />
        </section>

        <footer className="py-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">A</div>
            <span>© 2024 Akhari. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </footer>
      </main>
      <Toaster position="top-center" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;