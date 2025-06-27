import { ref, onMounted } from 'vue'

// Types
export type Theme = 'light' | 'dark'

export function useTheme() {
  // Get initial theme 
  const currentTheme = ref<Theme>('light')

  // Initialize theme
  const initTheme = () => {
    if (localStorage.getItem('theme')) {
      currentTheme.value = localStorage.getItem('theme') as Theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme.value = 'dark';
    }
    if (currentTheme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', currentTheme.value);
    localStorage.setItem('theme', currentTheme.value);
  };

  // Update theme 
  function switchTheme() {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    if (currentTheme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', currentTheme.value);
    localStorage.setItem('theme', currentTheme.value);
  }

  onMounted(initTheme)

  return {
    currentTheme,
    switchTheme,
  }
}
