import { useState } from 'react';

export type Page = 'home' | 'about' | 'courses' | 'contact' | 'dashboard' | 'login';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return { currentPage, navigateTo };
};