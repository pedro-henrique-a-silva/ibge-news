import { act, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import mockData from './mocks/mockFetch';
import mockRelease from './mocks/mockRelease';
import mockNoticia from './mocks/mockNoticia';
import mockFavoritos from './mocks/mockFavoritos';

const NEWS_GALLERY_ID = '#news-gallery';

afterEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
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

  test('Verifica renderização todas as notícias', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockData,
    } as Response);

    const { container } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const newsGallery = container.querySelector(NEWS_GALLERY_ID);

    const news = newsGallery!.querySelectorAll('li');

    expect(news.length).toBe(mockData.items.length);
  });

  test('Testando filtro de releases', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockRelease,
    } as Response);

    const { container, user } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const releasesButton = screen.getByRole('button', {
      name: /releases/i,
    });

    await act(async () => {
      await user.click(releasesButton);
    });

    const newsGallery = container.querySelector(NEWS_GALLERY_ID);

    const news = newsGallery!.querySelectorAll('li');

    expect(news.length).toBe(mockRelease.items.length);

    mockRelease.items.forEach((item, index) => {
      const newsTitle = news[index].querySelector('h3');
      expect(newsTitle?.textContent).toBe(item.titulo);
    });
  });

  test('Testando filtro de noticías', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockNoticia,
    } as Response);

    const { container, user } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const noticiasButton = screen.getByRole('button', {
      name: /notícias/i,
    });

    await act(async () => {
      await user.click(noticiasButton);
    });

    const newsGallery = container.querySelector(NEWS_GALLERY_ID);

    const news = newsGallery!.querySelectorAll('li');

    expect(news.length).toBe(mockNoticia.items.length);

    mockNoticia.items.forEach((item, index) => {
      const newsTitle = news[index].querySelector('h3');
      expect(newsTitle?.textContent).toBe(item.titulo);
    });
  });

  test('Testando filtro de favoritos', async () => {
    localStorage.setItem('favoritesNews', JSON.stringify(mockFavoritos));

    const { container, user } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const favoritosButton = screen.getByRole('button', {
      name: /favoritos/i,
    });

    await act(async () => {
      await user.click(favoritosButton);
    });

    const newsGallery = container.querySelector(NEWS_GALLERY_ID);

    const news = newsGallery!.querySelectorAll('li');

    expect(news.length).toBe(mockFavoritos.length);

    mockFavoritos.forEach((item, index) => {
      const newsTitle = news[index].querySelector('h3');
      expect(newsTitle?.textContent).toBe(item.titulo);
    });
  });
});
