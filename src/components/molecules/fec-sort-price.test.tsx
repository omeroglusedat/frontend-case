import { render, screen, fireEvent } from '@testing-library/react';
import FECSortPrice from './fec-sort-price';

jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => key,
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        replace: jest.fn(),
    }),
    useSearchParams: () => ({
        get: () => '',
        toString: () => '',
    }),
}));

describe('FECSortPrice', () => {
    it('renders select with correct default value', () => {
        render(<FECSortPrice />);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
    });

    it('shows options and changes value on select', () => {
        render(<FECSortPrice />);

        const select = screen.getByRole('combobox');
        fireEvent.mouseDown(select); // Select açılır

        const ascOption = screen.getByRole('option', { name: 'ascSort' });
        fireEvent.click(ascOption);

        // Artık seçili olan tekrar Select içinde görünür
        expect(screen.getByRole('combobox')).toHaveTextContent('ascSort');
    });
});
