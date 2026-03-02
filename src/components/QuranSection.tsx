import { useLanguage } from './LanguageContext';
import { BookOpen, Search, Star } from 'lucide-react';

const SURAHS = [
  { id: 1, name: "Al-Fatihah", arabic: "الفاتحة", amharic: "አል-ፋቲሐ", verses: 7 },
  { id: 2, name: "Al-Baqarah", arabic: "البقرة", amharic: "አል-በቀራህ", verses: 286 },
  { id: 3, name: "Ali 'Imran", arabic: "آل عمران", amharic: "አሊ ዒምራን", verses: 200 },
];

export const QuranSection = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="text-primary" />
          {t('quran')}
        </h2>
        <div className="relative hidden sm:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search surah..." 
            className="pl-10 pr-4 py-2 bg-muted border-none rounded-full text-sm focus:ring-2 ring-primary transition-all w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SURAHS.map((surah) => (
          <div 
            key={surah.id}
            className="p-5 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                {surah.id}
              </div>
              <Star size={18} className="text-muted hover:text-yellow-500 transition-colors" />
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-bold text-lg">{language === 'am' ? surah.amharic : surah.name}</h3>
                <p className="text-sm text-muted-foreground">{surah.verses} Verses</p>
              </div>
              <span className="text-2xl font-arabic text-primary">{surah.arabic}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};