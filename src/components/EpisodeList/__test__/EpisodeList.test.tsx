import { render, screen } from '@/test';

import EpisodeList from '..';

const collection = [
    {
        id: '1',
        podcastId: '1',
        name: 'Episode 1',
        date: '2021-01-01',
        duration: '1:00:00',
        track: 'https://example.com/episode1.mp3',
        description: 'Episode 1 description',
    },
    {
        id: '2',
        podcastId: '1',
        name: 'Episode 2',
        date: '2021-01-01',
        duration: '1:00:00',
        track: 'https://example.com/episode1.mp3',
        description: 'Episode 1 description',
    },
];

describe('EpisodeList', () => {
    it('should render episode list and counter', () => {
        render(<EpisodeList collection={collection} />);
        expect(screen.getByTestId('episode-list-counter')).toBeInTheDocument();
        expect(screen.getByTestId('episode-list-counter')).toHaveTextContent('Episodes: 2');
    });

    it('should render episode list', () => {
        render(<EpisodeList collection={collection} />);
        expect(screen.getByTestId('episode-list')).toBeInTheDocument();
        expect(screen.getAllByTestId('episode-list-table-row')).toHaveLength(2);
    });

    it('should render no episodes found', () => {
        render(<EpisodeList collection={[]} />);
        expect(screen.getByTestId('episode-list')).toBeInTheDocument();
        expect(screen.getByText('No episodes found')).toBeInTheDocument();
    });
});
