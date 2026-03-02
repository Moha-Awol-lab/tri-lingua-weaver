import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden mb-8 group">
      <img 
        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/86c777fe-d179-4b88-a422-1b9fd58adeed/mosque-sunset-5ba03007-1772478187636.webp" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('welcome')}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-md">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};