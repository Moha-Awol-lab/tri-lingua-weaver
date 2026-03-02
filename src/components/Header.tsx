import { useLanguage } from './LanguageContext';
import { useTheme, Theme } from './ThemeContext';
import { Languages, Palette, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'am', label: 'አማርኛ' },
  ];

  const themes: { id: Theme; label: string }[] = [
    { id: 'light', label: t('themeLight') },
    { id: 'dark', label: t('themeDark') },
    { id: 'emerald', label: t('themeEmerald') },
    { id: 'sepia', label: t('themeSepia') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg">
            <span className="text-xl font-bold">A</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight hidden sm:block">Akhari</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">{t('quran')}</a>
          <a href="#" className="hover:text-primary transition-colors">{t('dhikr')}</a>
          <a href="#" className="hover:text-primary transition-colors">{t('prayerTimes')}</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative group">
            <button className="p-2 hover:bg-muted rounded-full transition-colors flex items-center gap-1">
              <Languages size={20} />
              <span className="text-sm uppercase font-medium">{language}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted first:rounded-t-xl last:rounded-b-xl ${language === lang.code ? 'text-primary font-bold' : ''}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="relative group">
            <button className="p-2 hover:bg-muted rounded-full transition-colors flex items-center gap-1">
              <Palette size={20} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {themes.map((th) => (
                <button
                  key={th.id}
                  onClick={() => setTheme(th.id)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted first:rounded-t-xl last:rounded-b-xl ${theme === th.id ? 'text-primary font-bold' : ''}`}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <a href="#" className="px-4 py-2 hover:bg-muted rounded-lg">{t('quran')}</a>
              <a href="#" className="px-4 py-2 hover:bg-muted rounded-lg">{t('dhikr')}</a>
              <a href="#" className="px-4 py-2 hover:bg-muted rounded-lg">{t('prayerTimes')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};