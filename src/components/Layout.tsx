import { useTheme } from '../context/ThemeContext';
import { ClassicLayout } from './designs/ClassicLayout';
import { ModernLayout } from './designs/ModernLayout';
import { SoftLayout } from './designs/SoftLayout';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    if (theme === 'soft') {
        return <SoftLayout>{children}</SoftLayout>;
    }

    if (theme === 'modern') {
        return <ModernLayout>{children}</ModernLayout>;
    }

    return <ClassicLayout>{children}</ClassicLayout>;
};
