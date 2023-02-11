import { render, screen } from '@/test';

import Header from '..';

describe('Header', () => {
    it('should render header with a text and a mark', () => {
        render(<Header />);
        expect(screen.getByTestId('podcast-header')).toBeInTheDocument();
        expect(screen.getByText('Podcaster')).toBeInTheDocument();
    });

    it('should render header without mark', () => {
        render(<Header isLoading={false} />);
        expect(screen.queryByTestId('podcast-header-mark')).not.toBeInTheDocument();
    });

    it('should render header with mark', () => {
        render(<Header isLoading={true} />);
        expect(screen.getByTestId('podcast-header-mark')).toBeInTheDocument();
    });

    it('should header has link to home', () => {
        render(<Header />);
        expect(screen.getByText('Podcaster')).toHaveAttribute('href', '/');
    });
});
