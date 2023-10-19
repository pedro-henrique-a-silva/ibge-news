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
  const [pagination, setPagination] = useState(1);

  const updatePagination = (isFilter: string) => {
    if (isFilter === 'beginWith2') {
      setPagination(2);
      return;
    }
    setPagination((prev) => prev + 1);
  };

  const updateNews = (newNews: NewsType[]) => {
    setNews(newNews);
  };

  const moreNews = (newNews: NewsType[]) => {
    setNews((prev) => [...prev, ...newNews]);
  };

  useEffect(() => {
    const fetchNews = async () => {
      const apiData = await fetchAPI(10);
      updatePagination('beginWith2');
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
    pagination,
    updatePagination,
    updateNews,
    moreNews,
  };
  return (
    <NewsContext.Provider value={ contextValue }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
