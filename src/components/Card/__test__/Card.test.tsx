import { render, screen, fireEvent } from '@/test';

import Card from '..';

const props = {
    url: '/podcast/123',
    img: {
        width: 100,
        height: 100,
        src: 'https://picsum.photos/100/100',
        alt: 'alt',
    },
    title: 'title',
    author: 'author',
};

describe('Card', () => {
    it('should render card with image, name, author and the card is clickable', () => {
        render(<Card {...props} />);
        expect(screen.getByTestId('card')).toBeInTheDocument();
        expect(screen.getByTestId('card')).toHaveAttribute('href', props.url);
        expect(screen.getByTestId('card-image')).toBeInTheDocument();
        expect(screen.getByTestId('card-title')).toBeInTheDocument();
        expect(screen.getByTestId('card-author')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('card'));
    });
});
