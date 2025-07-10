import { render, screen, fireEvent } from '@testing-library/react';
import FECProductCard from './fec-product-card';
import { ProductType } from '../organisms/products-container';

const push = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push,
    }),
}));

jest.mock('../atoms/fec-product-image', () => (props: any) => (
    <img data-testid="product-image" src={props.src} alt="product" />
));

jest.mock('../atoms/fec-typo', () => (props: any) => (
    <span {...props}>{props.children}</span>
));

jest.mock('./fec-add-basket-button', () => () => (
    <button data-testid="add-basket-button">Sepete Ekle</button>
));


const mockProduct: ProductType = {
    id: 1,
    title: 'Test Ürünü',
    category: 'Elektronik',
    description: '',
    image: 'https://via.placeholder.com/150',
    rating: { rate: 4.3, count: 50 },
    price: 99.99,
};

describe('FECProductCard', () => {
    it('renders product information', () => {
        render(<FECProductCard product={mockProduct} />);

        expect(screen.getByText('Elektronik')).toBeInTheDocument();
        expect(screen.getByText('Test Ürünü')).toBeInTheDocument();
        expect(screen.getByText('4.3')).toBeInTheDocument();
        expect(screen.getByTestId('product-image')).toHaveAttribute('src', mockProduct.image);
        expect(screen.getByTestId('add-basket-button')).toBeInTheDocument();
    });

    it('navigates to product detail on click', () => {
        const router = require('next/navigation').useRouter();
        render(<FECProductCard product={mockProduct} />);

        const card = screen.getByText('Test Ürünü'); // Tıklanabilir ana alan
        fireEvent.click(card);

        expect(router.push).toHaveBeenCalledWith(`/products/${mockProduct.id}`);
    });
});
