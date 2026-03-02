import { useLanguage } from './LanguageContext';
import { Clock } from 'lucide-react';

export const PrayerTimes = () => {
  const { t } = useLanguage();
  
  const times = [
    { name: t('fajr'), time: '05:12 AM', active: false },
    { name: t('dhuhr'), time: '12:30 PM', active: true },
    { name: t('asr'), time: '03:45 PM', active: false },
    { name: t('maghrib'), time: '06:15 PM', active: false },
    { name: t('isha'), time: '07:45 PM', active: false },
  ];

  return (
    <div className="bg-card border border-border rounded-3xl p-6 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="text-primary" size={24} />
        <h2 className="text-xl font-bold">{t('prayerTimes')}</h2>
      </div>

      <div className="space-y-3">
        {times.map((p) => (
          <div 
            key={p.name}
            className={`flex items-center justify-between p-4 rounded-2xl transition-all ${p.active ? 'bg-primary text-primary-foreground shadow-md scale-[1.02]' : 'bg-muted/50'}`}
          >
            <span className="font-semibold">{p.name}</span>
            <span className="font-mono">{p.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};