import { render, screen } from '@testing-library/react';
import FECBasketCount from './fec-basket-count';
import { ProductContext, ProductContextTypes } from '@/contexts/product-context';

jest.mock('../atoms/fec-typo', () => (props: any) => <div data-testid="typography">{props.children}</div>);

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string, values?: any) => {
    if (typeof key === 'string' && key === 'selectedProductCount') {
      return `Sepette ${values?.count} ürün var`;
    }
    return key;
  },
}));


const renderWithContext = (basketItems: any[]) => {
  const mockValue: ProductContextTypes = {
    productList: [],
    productCount: 0,
    maxPrice: 0,
    categoryList: [],
    basketItems,
    addBasketItem: () => { },
    removeBasketItem: () => { },
  };

  return render(
    <ProductContext.Provider value={mockValue}>
      <FECBasketCount />
    </ProductContext.Provider>
  );
};



describe('FECBasketCount', () => {
  it('does not render anything when basket is empty', () => {
    renderWithContext([]);
    expect(screen.queryByTestId('typography')).not.toBeInTheDocument();
  });

  it('renders correct text when basket has items', () => {
    renderWithContext([{ id: 1 }, { id: 2 }]);
    const text = screen.getByTestId('typography');
    expect(text).toHaveTextContent('Sepette 2 ürün var');
  });
});
