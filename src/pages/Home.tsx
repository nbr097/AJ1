import { useTheme } from '../context/ThemeContext';
import { ClassicHome } from './designs/ClassicHome';
import { ModernHome } from './designs/ModernHome';
import { SoftHome } from './designs/SoftHome';

export const HomePage = () => {
    const { theme } = useTheme();

    if (theme === 'soft') {
        return <SoftHome />;
    }

    if (theme === 'modern') {
        return <ModernHome />;
    }

    return <ClassicHome />;
};
