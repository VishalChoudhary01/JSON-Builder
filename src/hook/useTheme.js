import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';

export const useTheme = () => {
  const { theme, toggleTheme, setTheme, initTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme on mount
    initTheme();
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme-storage')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [initTheme, setTheme]);

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
  };
};
