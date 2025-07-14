import { render, screen } from '@testing-library/react';
import FECPagination from './fec-pagination';
import { ProductContext, ProductContextTypes } from '@/contexts/product-context';

jest.mock('../atoms/fec-pagination-item', () => (props: any) => (
  <div data-testid="pagination-item">{`Page ${props.value}`}</div>
));


const renderWithContext = (productCount: number) => {
  const mockValue: ProductContextTypes = {
    productList: [],
    productCount,
    maxPrice: 0,
    categoryList: [],
    basketItems: [],
    addBasketItem: () => {},
    removeBasketItem: () => {},
  };

  return render(
    <ProductContext.Provider value={mockValue}>
      <FECPagination />
    </ProductContext.Provider>
  );
};
describe('FECPagination', () => {
  it('renders correct number of pagination items', () => {
    renderWithContext(30); // 30 ürün → 3 sayfa

    const items = screen.getAllByTestId('pagination-item');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Page 1');
    expect(items[1]).toHaveTextContent('Page 2');
    expect(items[2]).toHaveTextContent('Page 3');
  });

  it('renders no pagination items if productLength is 0', () => {
    renderWithContext(0); // 0 ürün → 0 sayfa

    const items = screen.queryAllByTestId('pagination-item');
    expect(items).toHaveLength(0);
  });
});
