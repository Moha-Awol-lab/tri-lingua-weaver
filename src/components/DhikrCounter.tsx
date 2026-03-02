import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Plus, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export const DhikrCounter = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    setTotal(prev => prev + 1);
    if ((count + 1) % 33 === 0) {
      toast.success('Mashallah! 33 completed.');
    }
  };

  const reset = () => {
    setCount(0);
    toast.info(t('reset'));
  };

  return (
    <div className="p-6 bg-card border border-border rounded-3xl shadow-sm flex flex-col items-center gap-6">
      <h3 className="text-xl font-semibold text-card-foreground">{t('dhikr')}</h3>
      
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-muted fill-none"
            strokeWidth="8"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-primary fill-none"
            strokeWidth="8"
            strokeDasharray="553"
            strokeDashoffset={553 - (553 * (count % 33)) / 33}
            transition={{ type: 'spring', stiffness: 50 }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-bold font-mono">{count}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{count % 33} / 33</span>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <button
          onClick={reset}
          className="flex-1 py-4 bg-muted hover:bg-muted/80 rounded-2xl flex items-center justify-center transition-colors"
        >
          <RotateCcw size={24} />
        </button>
        <button
          onClick={increment}
          className="flex-[2] py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all"
        >
          <Plus size={32} />
        </button>
      </div>

      <div className="text-sm text-muted-foreground">
        {t('total')}: {total}
      </div>
    </div>
  );
};