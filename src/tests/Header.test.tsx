import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testando se header está renderizando', () => {
  test('Verifica se o header está renderizando', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const header = screen.getByText(/IBGE news/i);
    expect(header).toBeInTheDocument();
  });
});
