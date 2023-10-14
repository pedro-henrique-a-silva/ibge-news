import React, { useEffect, useState } from 'react';
import NewsContext from './NewsContext';
import { NewsType } from '../types';
import { fetchAPI } from '../utils/utils';

type NewsProviderProps = {
  children: React.ReactNode
};
function NewsProvider(props: NewsProviderProps) {
  const { children } = props;
  const [news, setNews] = useState<NewsType[]>([]);

  const updateNews = (newNews: NewsType[]) => {
    setNews(newNews);
  };

  useEffect(() => {
    const fetchNews = async () => {
      const apiData = await fetchAPI(10);
      setNews(apiData.items);
    };
    try {
      fetchNews();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const contextValue = {
    news,
    updateNews,
  };
  return (
    <NewsContext.Provider value={ contextValue }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
