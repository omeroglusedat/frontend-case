import { render, screen } from '@testing-library/react';
import FECPagination from './fec-pagination';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('../atoms/fec-pagination-item', () => (props: any) => (
  <div data-testid="pagination-item">{`Page ${props.value}`}</div>
));

const mockReducer = (productLength: number) => () => ({
  productSlice: {
    productLength,
  },
});

const renderWithRedux = (productLength: number) => {
  const store = configureStore({
    reducer: mockReducer(productLength),
  });

  return render(
    <Provider store={store}>
      <FECPagination />
    </Provider>
  );
};

describe('FECPagination', () => {
  it('renders correct number of pagination items', () => {
    renderWithRedux(30); // 30 ürün → 3 sayfa

    const items = screen.getAllByTestId('pagination-item');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Page 1');
    expect(items[1]).toHaveTextContent('Page 2');
    expect(items[2]).toHaveTextContent('Page 3');
  });

  it('renders no pagination items if productLength is 0', () => {
    renderWithRedux(0); // 0 ürün → 0 sayfa

    const items = screen.queryAllByTestId('pagination-item');
    expect(items).toHaveLength(0);
  });
});
