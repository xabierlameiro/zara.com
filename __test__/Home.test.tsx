import { render, screen } from '@/test';
import HomePage from '../src/pages';

const mockPodcasts = Array(100).fill({
    img: {
        src: 'https://picsum.photos/200/300',
        alt: 'Podcast image',
        width: 200,
        height: 300,
    },
    url: 'https://www.google.com',
    title: 'Podcast title',
});

describe('HomePage', () => {
    it('render your main with render 100 podcasts ', () => {
        render(<HomePage podcasts={mockPodcasts} />);
        expect(screen.getAllByTestId('card')).toHaveLength(100);
    });
});
