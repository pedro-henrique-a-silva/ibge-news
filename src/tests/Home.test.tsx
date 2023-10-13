import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import mockData from './mocks/mockFetch';

beforeEach(() => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => mockData,
  } as Response);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Testando se notícias renderizam corretamente', () => {
  test('Verifica renderização da notícia em destaque', async () => {
    const { container } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const highlightNewsWrapper = container.querySelector('#highlight-news');

    const highlightNewsThumb = highlightNewsWrapper!.querySelector('img');
    const highlightNewsTitle = highlightNewsWrapper!.querySelector('h3');
    const highlightNewsText = highlightNewsWrapper!.querySelector('p');

    expect(highlightNewsThumb).toBeInTheDocument();
    expect(highlightNewsTitle?.textContent).toBe(mockData.items[0].titulo);
    expect(highlightNewsText?.textContent).toBe(mockData.items[0].introducao);
  });

  test('Verifica renderização todas as noticícias', async () => {
    const { container } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const newsGallery = container.querySelector('#news-gallery');

    const news = newsGallery!.querySelectorAll('li');

    console.log(news.length);

    expect(news.length).toBe(mockData.items.length);
  });
});
