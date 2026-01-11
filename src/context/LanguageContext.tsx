import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Check localStorage on initial load
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('blockprints-language');
            if (saved === 'hi' || saved === 'en') {
                return saved;
            }
        }
        return 'en';
    });

    useEffect(() => {
        // Save to localStorage when language changes
        localStorage.setItem('blockprints-language', language);
        // Update HTML lang attribute for SEO
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const toggleLanguage = () => {
        setLanguageState(prev => prev === 'en' ? 'hi' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Custom hook for translations
export const useTranslation = () => {
    const { language } = useLanguage();

    const t = (key: string, translations: { en: string; hi: string }): string => {
        return translations[language] || translations.en;
    };

    return { t, language };
};
