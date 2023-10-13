import React, { useEffect, useState } from 'react';
import NewsContext  from './NewsContext';
import { NewsType } from '../types';

type NewsProviderProps = {
    children: React.ReactNode
}
function NewsProvider(props: NewsProviderProps) {
	const { children } = props
	const [news, setNews] = useState<NewsType[]>([]);

	useEffect(() => {
		const fetchNews = async () => {
			const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
			const data = await response.json();
			setNews(data.items);
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