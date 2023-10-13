import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NewsProvider from '../context/NewsProvider.tsx'


export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, '', route);


  return {
    ...render(
      <BrowserRouter>
        <NewsProvider>
          {ui}
        </NewsProvider>
      </BrowserRouter>
    ),
    user: userEvent.setup(),
  };
};
