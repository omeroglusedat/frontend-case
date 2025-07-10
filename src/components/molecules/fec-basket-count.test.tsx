import { render, screen } from '@testing-library/react';
import FECBasketCount from './fec-basket-count';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// FECTypo mock
jest.mock('../atoms/fec-typo', () => (props: any) => <div data-testid="typography">{props.children}</div>);

// Çeviri mock'u
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string, values?: any) => {
    if (typeof key === 'string' && key === 'selectedProductCount') {
      return `Sepette ${values?.count} ürün var`;
    }
    return key;
  },
}));

// Mock store fonksiyonu
const renderWithStore = (basketItems: any[]) => {
  const mockReducer = () => ({
    productSlice: {
      basketItems,
    },
  });

  const store = configureStore({ reducer: mockReducer });

  return render(
    <Provider store={store}>
      <FECBasketCount />
    </Provider>
  );
};

describe('FECBasketCount', () => {
  it('does not render anything when basket is empty', () => {
    renderWithStore([]);
    expect(screen.queryByTestId('typography')).not.toBeInTheDocument();
  });

  it('renders correct text when basket has items', () => {
    renderWithStore([{ id: 1 }, { id: 2 }]);
    const text = screen.getByTestId('typography');
    expect(text).toHaveTextContent('Sepette 2 ürün var');
  });
});
