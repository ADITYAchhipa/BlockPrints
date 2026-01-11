import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-medium hover:bg-primary/10"
            title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
        >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-semibold">
                {language === 'en' ? 'हिंदी' : 'EN'}
            </span>
        </Button>
    );
};

export default LanguageToggle;
