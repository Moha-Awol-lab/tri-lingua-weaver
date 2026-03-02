import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    welcome: "Welcome to Akhari",
    subtitle: "Your spiritual companion for a lasting life.",
    dhikr: "Dhikr Counter",
    quran: "Daily Quran",
    prayerTimes: "Prayer Times",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    reset: "Reset",
    total: "Total",
    fajr: "Fajr",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    explore: "Explore the Quran",
    verseOfDay: "Verse of the Day",
    morningDhikr: "Morning Dhikr",
    eveningDhikr: "Evening Dhikr",
    themeLight: "Light",
    themeDark: "Dark",
    themeEmerald: "Emerald",
    themeSepia: "Sepia",
  },
  ar: {
    welcome: "مرحباً بكم في أخري",
    subtitle: "رفيقك الروحي لحياة باقية.",
    dhikr: "عداد الذكر",
    quran: "القرآن اليومي",
    prayerTimes: "مواقيت الصلاة",
    settings: "الإعدادات",
    language: "اللغة",
    theme: "المظهر",
    reset: "إعادة تعيين",
    total: "المجموع",
    fajr: "الفجر",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
    explore: "استكشف القرآن",
    verseOfDay: "آية اليوم",
    morningDhikr: "أذكار الصباح",
    eveningDhikr: "أذكار المساء",
    themeLight: "فاتح",
    themeDark: "داكن",
    themeEmerald: "زمردي",
    themeSepia: "سيبيا",
  },
  am: {
    welcome: "እንኳን ወደ አኺሪ በደህና መጡ",
    subtitle: "ለዘላቂ ህይወት መንፈሳዊ ጓደኛዎ።",
    dhikr: "የዚክር ቆጣሪ",
    quran: "የዕለት ተዕለት ቁርዓን",
    prayerTimes: "የሰላት ጊዜያት",
    settings: "ቅንብሮች",
    language: "ቋንቋ",
    theme: "ገጽታ",
    reset: "ዳግም አስጀምር",
    total: "ጠቅላላ",
    fajr: "ፈጅር",
    dhuhr: "ዙሁር",
    asr: "ዐስር",
    maghrib: "መግሪብ",
    isha: "ዒሻእ",
    explore: "ቁርዓንን ያስሱ",
    verseOfDay: "የዕለቱ አንቀጽ",
    morningDhikr: "የጠዋት ዚክር",
    eveningDhikr: "የምሽት ዚክር",
    themeLight: "ብርሃን",
    themeDark: "ጨለማ",
    themeEmerald: "ኤመራልድ",
    themeSepia: "ሴፒያ",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};