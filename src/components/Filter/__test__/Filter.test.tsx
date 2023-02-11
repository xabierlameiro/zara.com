import { render, screen } from '@/test';

import Filter from '..';

describe('Filter', () => {
    it('should render filter with placeholder and counter', () => {
        render(<Filter collection={[]} />);
        expect(screen.getByPlaceholderText('Filter podcast...')).toBeInTheDocument();
        expect(screen.getByTestId('filter-counter')).toBeInTheDocument();
    });
});
