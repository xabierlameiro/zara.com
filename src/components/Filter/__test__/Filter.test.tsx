import { render, screen } from '@/test';

import Filter from '..';

describe('Filter', () => {
    it('should render filter with placeholder and counter', () => {
        render(<Filter collection={[]} />);
        expect(screen.getByPlaceholderText('Filter podcast...')).toBeInTheDocument();
        expect(screen.getByTestId('filter-counter')).toBeInTheDocument();
    });

    it('should render without collection', () => {
        // @ts-ignore
        render(<Filter collection={undefined} />);
        expect(screen.queryByTestId('filter-counter')).not.toBeInTheDocument();
    });
});
