import React, { useEffect, useState } from 'react';
import NewsContext  from './NewsContext';
import { NewsType } from '../types';
import { fetchAPI } from '../utils/fetchAPI';

type NewsProviderProps = {
    children: React.ReactNode
}
function NewsProvider(props: NewsProviderProps) {
	const { children } = props
	const [news, setNews] = useState<NewsType[]>([]);

	useEffect(() => {
		const fetchNews = async () => {
			const apiData = await fetchAPI(200);
			setNews(apiData.items);
		}
		try {
			fetchNews();
		} catch (error) {
			console.log(error);
		}
		
	}, []);

	const contextValue = {
		news,
	}
	return (
			<NewsContext.Provider value={contextValue}>
					{children}
			</NewsContext.Provider>
	)
}

export default NewsProvider;